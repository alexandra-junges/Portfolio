import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    behance,
    docker,
    dbeauty,
    dtcom,
    aegis,
    sa,
    boekshare, 
    primark,
    justin, 
    henrique,
    bookstore,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Marketing Intern",
      company_name: "D'Beauty Club",
      icon: dbeauty,
      iconBg: "#E6DEDD",
      date: "Aug 2017 - Sep 2017",
      points: [
        "Research and creation of ads (images and videos editions)",
        "elaboration of promotions for dissemination on social media",
        "using Adobe programs such as Photoshop, Illustrator, and After Effects",
      ],
    },
    {
      title: "Marketing Intern",
      company_name: "Aegis Participações S.A",
      icon: aegis,
      iconBg: "#E6DEDD",
      date: "Nov 2017 - Jun 2018",
      points: [
        "Aegis Participações managed two companies, a natural products pharmacy, and a preschool.",
        "Creation and deployment of pieces for publishing in social media, blog management (posting photos and news), and creation of printed pieces, such as cards,folder, flyer, and business cards.",
        "Software used: Adobe Photoshop, Illustrator, Indesign, and Wordpress platform.",
      ],
    },
    {
      title: "Illustration Trainee",
      company_name: "DTCOM Direct to company S.A",
      icon: dtcom,
      iconBg: "#E6DEDD",
      date: "Jul 2018 - Mar 2019",
      points: [
        "I worked with search and photos edition,",
        "retracing images and tables to be responsive for web,",
        "and to be printed in handouts and books for the universities as Positivo, UNA, Anhanguera, and others.",
      ],
    },
    {
      title: "Creation Assistant",
      company_name: "Sã Consciência de Mercado",
      icon: sa,
      iconBg: "#E6DEDD",
      date: "Mar 2019 - Fev 2020",
      points: [
        "Sã Consciência de Mercado is a company of branding and marketing.",
        "I worked with the creation of digital arts and media prints, using programs such as Adobe Photoshop, Illustrator, After Effects, Adobe XD.",
        "In this job, I also worked creating content for different kinds of companies as financial, juridic/law, insurances, restaurants, and credit cards.",
      ],
    },
    {
      title: "Freelancer",
      company_name: "Boekshare",
      icon: boekshare,
      iconBg: "#E6DEDD",
      date: "May 2021 - Fev 2022",
      points: [
        "I was responsible for creating logos and layouts (UI) for the Boekshare platform.",
        "The creation process started with the client's briefing, references, mood board, building the brand concept, searching about the target audience and competitors, creating personas and sketches, logo vectorization, typography and colors definition, wireframe creation, prototyping.",
        "I used Adobe Illustrator and Figma.",
      ],
    },
    {
      title: "Retail Assistant",
      company_name: "Primark",
      icon: primark,
      iconBg: "#E6DEDD",
      date: "Jun 2021 - Present",
      points: [
        "I'm responsible for the maintenance of the store, attending to the tills (for payment and also taking care of the returned items), and I'm also responsible for restore the products in the shelves.",
        "At Primark, we focus on providing good quality for the customer service.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Alexandra did a terrific job on the project. She made a perfect logo and design for the website. What I liked most about working with Alexandra is how she explains her thought process with everything she does.",
      name: "Justin Robles",
      designation: "CFO",
      company: "Boekshare",
      image: justin,
    },
    {
      testimonial:
        "I worked with Alexandra during the development of BoekShare, and I've been also guiding and coaching her in her studies of software development. She is a dedicated professional, always does her best to delivery high-quality products and is a fast learner.",
      name: "Henrique Domareski",
      designation: "Mentor",
      company: "Development",
      image: henrique,
    },
  ];
  
  const projects = [
    {
      name: "BookStore",
      description:
        "Webpage where you can search, add, edit and delete a book and the respective category for that book.",
      tags: [
        {
          name: "react",
          color: "text-[#FF9A84]",
        },
        {
          name: "bootstrap",
          color: "text-[#001960]",
        },
        {
          name: "javascript",
          color: "text-[#E34056]",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/alexandra-junges/react-app-bookstore",
    },
    // {
    //   name: "Design",
    //   description:
    //     "Collection of some Design projects that I created in the past years.",
    //   tags: [
    //     {
    //       name: "Photoshop",
    //       color: "text-[#FF9A84]",
    //     },
    //     {
    //       name: "Figma",
    //       color: "text-[#001960]",
    //     },
    //     {
    //       name: "Illustrator",
    //       color: "text-[#E34056]",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://www.behance.net/aleexandra",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };