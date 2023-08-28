import React, { Suspense, useState, lazy, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'
import { ContactShadows, OrbitControls } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Avatar = lazy(() => import("./Avatar"));

const AvatarCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)")
        setIsMobile(mediaQuery.matches)
    
        const handleMediaQueryChange = (event) => {
          setIsMobile(event.matches)
        }
  
        mediaQuery.addEventListener("change", handleMediaQueryChange)
    
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange)
        }
    }, [])
  
      return (
        <Canvas>
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} enableRotate={false}/>
                <ContactShadows
                    position-y={-2.3}
                  opacity={0.42}
                  scale={10}
                  blur={1}
                  far={10}
                  resolution={256}
                  color="#001960"
                />
                <group rotation-y={-Math.PI / 4}>
                    <Avatar isMobile={isMobile} />
                </group>
            <ambientLight intensity={0.7} />
          </Suspense>
        </Canvas>
      )
    }
    
  export default AvatarCanvas