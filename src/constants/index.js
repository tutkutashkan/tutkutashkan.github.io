import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    css,
    reactjs,
    nodejs,
    git,
    bytecomputer,
    asteroid,
    comp390,
    sidescroll,
    sqlproj,
    maskrcnn,
    bagep,
    freelance,
    mapof,
    uol,
    doga,
    csharp,
    python,
    java,
    sql,
    rlogo,
    swift,
    haskell,
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
      title: "Game Development",
      icon: backend,
    },
    {
      title: "App Development",
      icon: mobile,
    },
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "AI Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "csharp",
      icon: csharp,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "swift",
      icon: swift,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "rlogo",
      icon: rlogo,
    },
    {
      name: "haskell",
      icon: haskell,
    },
    
  ];
  
  const experiences = [
    {
      title: "Technical Assistant",
      company_name: "Byte Computer",
      icon: bytecomputer,
      iconBg: "#383E56",
      date: "2017 - 2020",
      points: [
        " Listened to customer needs and desires to recommend optimal products.",
        " Repaired computer hardware and found faults in programming.", 
        " Improved my skills and gained new techniques.",
      ],
    },
    {
      title: "Spokesperson",
      company_name: "Bagep (Independent Youth Platform), Cyprus",
      icon: bagep,
      iconBg: "#E6DEDD",
      date: "2019 - Current",
      points: [
        " Voluntary Job.",
        " Public Relations Collecting dues and arranging meetings.",
        " Finding solutions for youth's problems.",
      ],
    },
    {
      title: "Game and App Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "2022 - 2023",
      points: [
        " Developing little games and applications in free time",
        " Collaborating with cross-functional teams including designers, , and other developers to create products. "
      ],
    },
  ];
  const educations = [
    {
      title: "Doga College",
      company_name: "High School Diploma",
      icon: doga,
      iconBg: "#383E56",
      date: "2013 - 2020",
      points: [
        " Learned C++ and strategy behind the computers in middle school",
        " Advanced my coding skills using Python and improved my problem solving methods in my projects", 
        " Learned SQL to create databases",
        " Chess, Handball and Basketball team  and Space Camp experience",
        " IGCSE Maths: A*, English: B, IELTS: 7.0"
      ],
    },
    {
      title: "University of Liverpool",
      company_name: "Bachelor's degree, Computer Science",
      icon: uol,
      iconBg: "#E6DEDD",
      date: "2020 - 2023",
      points: [
        " Graduated with 2:1 ",
        " Modules in Y2: App Development, Advanced AI, Game Design & Implementation, Database Development, Complexity of Algorithms, Software Engineering,",
        " Modules in Y3: Autonomous Mobile Robotics, Robot Perception & Manipulation, Advanced Game Development, Multi Agent Systems. ",
        " Learned Java, Swift, Haskell, R and improved my Python, SQL and C# knowledge"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "One of the better projects I have seen this year! This really is an outstanding project. The implementation is packed with features and appears to work flawlessly",
      name: "Dr Stuart Thomason",
      designation: "Senior Lecturer",
      company: "Department of Computer Science",
    },
    {
      testimonial:
        "Tutku has excellent communication. In addition, he is exremely organized, reliable and trustable. He can work independently and ensure that the job is gets done",
      name: "Salim Hakki",
      designation: "Manager",
      company: "Byte Computer",
    },
  ];
  
  const projects = [
    {
      name: "Final Year Project",
      description:
        "Online Multiplayer game with a procedurally generated world, demonstrating the potential of procedural content generation in game development. Achieved 81%",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "Photon",
          color: "pink-text-gradient",
        },
      ],
      image: comp390,
      source_code_link: "https://github.com/",
    },
    {
      name: "Asteroid Game",
      description:
        "The objective of this project is to implement a game inspired by the classic arcade game `Asteroids` with some extra features.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: asteroid,
      source_code_link: "https://github.com/",
    },
    {
      name: "2D Side Scroller Game",
      description:
        "The game is a 2d Platformer similar to Super Mario where the player needs to pass some enemies and traps to reach the treasure at the end of the level.",
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: sidescroll,
      source_code_link: "https://github.com/",
    },
    {
      name: "Map of Artworks in Campus",
      description:
        "The application will enable you to locate artworks on campus relative to the user’s current location.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "XCode",
          color: "green-text-gradient",
        },
        {
          name: "git",
          color: "pink-text-gradient",
        },
      ],
      image: mapof,
      source_code_link: "https://github.com/",
    },
    {
      name: "Database for Supermarket",
      description:
        "This is a supermarket database for an example store including the support of logistics such as moving wares around the different shops. ",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
      ],
      image: sqlproj,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mask R-CNN ",
      description:
        " Reading the images from a webcam, feeding them to a Mask-RCNN network and visualise the results in real time.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Google Collab",
          color: "pink-text-gradient",
        },
      ],
      image: maskrcnn,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,educations, testimonials, projects };