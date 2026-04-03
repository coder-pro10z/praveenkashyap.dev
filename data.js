const portfolioData = {
  profile: {
    name: "Praveen Kashyap",
    title: "Full Stack .NET Developer @ Coforge",
    tagline: "Building scalable backend systems with ASP.NET Core",
    email: "[2pkashyap2001@gmail.com](mailto:2pkashyap2001@gmail.com)",
    links: {
      github: "https://github.com/coder-pro10z",
      linkedin: "https://www.linkedin.com/in/coder-pro10z/",
      resume: "./Praveen_Kashyap_Dotnet_resume.pdf"
    },
    brandMark: "Praveen Kashyap",
    brandName: "Portfolio"
  },

  skills: {
    backend: [".NET Core", "ASP.NET Core", "REST APIs"],
    frontend: ["Angular", "React", "TypeScript"],
    database: ["SQL Server", "PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "Visual Studio", "VS Code", "Postman", "Swagger"],
    methodologies: ["Agile", "Scrum"]
  },

  // projects: [
  //   {
  //     title: "User Management System",
  //     description: "Role-based authentication system",
  //     highlights: [
  //       "Implemented custom authorization",
  //       "Optimized database queries",
  //       "Applied Dependency Injection architecture"
  //     ],
  //     tech: ["ASP.NET Core", "SQL Server"],
  //     service: "Authentication & Authorization",
  //     icon: "U",
  //     link: "https://github.com/YOUR_USERNAME/user-management-system",
  //     linkLabel: "Case Study "
  //   },
  //   {
  //     title: "Interview Prep Platform",
  //     description: "Structured practice workflow for technical interview preparation",
  //     highlights: [
  //       "Built modular APIs for question delivery",
  //       "Designed maintainable service-layer abstractions",
  //       "Improved admin workflows for content management"
  //     ],
  //     tech: ["ASP.NET Core", "Angular"],
  //     service: "Full Stack Application",
  //     icon: "I",
  //     link: "https://github.com/YOUR_USERNAME/interview-prep-platform",
  //     linkLabel: "Case Study "
  //   },
  //   {
  //     title: "Observability Dashboard",
  //     description: "Centralized monitoring experience for application health and diagnostics",
  //     highlights: [
  //       "Introduced structured logging patterns with Serilog",
  //       "Reduced debugging time with richer telemetry",
  //       "Improved deployment confidence through visibility"
  //     ],
  //     tech: [".NET Core", "PostgreSQL"],
  //     service: "Monitoring & Diagnostics",
  //     icon: "O",
  //     link: "https://github.com/YOUR_USERNAME/observability-dashboard",
  //     linkLabel: "Case Study "
  //   }
  // ],

  projects: [
    {
      title: "Money Pilot",
      description: "A comprehensive full-stack personal finance platform designed to track, manage, and analyze financial data.",
      highlights: [
        "Built scalable RESTful APIs using ASP.NET Core",
        "Developed a responsive, component-driven Angular frontend",
        "Implemented secure data handling and user flows"
      ],
      tech: ["ASP.NET Core", "Angular", "C#"],
      service: "Financial Tech",
      icon: {
        type: "material-symbols-outlined",
        name: "payments"
      },
      link: "https://github.com/coder-pro10z/money-pilot",
      linkLabel: "View Repository",
      demoLink: "https://money-pilot-opal.vercel.app",
      demoLabel: "View Demo"
    },
    {
      title: "RentIt",
      description: "An end-to-end property marketplace platform allowing users to list, browse, and seamlessly book rentals.",
      highlights: [
        "Architected a scalable NoSQL schema with MongoDB",
        "Built interactive UI components using React",
        "Engineered secure user authentication and booking workflows"
      ],
      tech: ["React", "Node.js", "MongoDB"],
      service: "Full Stack Marketplace",
      icon: {
        type: "material-symbols-outlined",
        name: "home"
      },
      link: "https://github.com/coder-pro10z/RentIt",
      linkLabel: "View Repository ",
      demoLink: "",
      demoLabel: "View Demo"
    },
    {
      title: "Interview Prep Platform",
      description: "A specialized interview preparation platform tailored for the .NET and Angular ecosystem. (Currently in active development).",
      highlights: [
        "Engineered diverse evaluation workflows including instant-feedback Mock Quizzes and strict 'Interview Ready' professional assessments",
        "Curated a comprehensive knowledge base with CheatSheets and targeted questions spanning System Design, OOP, Backend, Frontend, Database, and Security",
        "Architected modular APIs to support scalable content delivery and maintainable system design"
      ],
      tech: [".NET Core", "Angular"],
      service: "Educational Platform",
      icon: {
        type: "material-symbols-outlined",
        name: "menu_book"
      },
      link: "https://github.com/coder-pro10z/FullStackMastery",
      linkLabel: "View Repository ",
      demoLink: "",
      demoLabel: "View Demo"
    }
  ],
  
  achievements: [
    "3 years of professional experience with .NET and Angular",
    "Builds clean, maintainable full-stack applications",
    "Creates mobile-friendly responsive interfaces",
    "Explores MERN to stay versatile across stacks"
  ],

  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/coder-pro10z/" },
    { label: "GitHub", href: "https://github.com/coder-pro10z" },
    { label: "Resume", href: "./Praveen_Kashyap_Dotnet_resume.pdf" }
  ],

  navigation: [
    { label: "Projects", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "Portfolio",
    actions: [
      { label: "Projects", href: "#portfolio", variant: "primary" },
      { label: "About", href: "#about", variant: "ghost" },
      { label: "Resume", href: "./Praveen_Kashyap_Dotnet_resume.pdf", variant: "success" }
    ]
  },

  sections: {
    projects: {
      title: "Selected Projects",
      meta: "Scalable systems, clean architecture, measurable impact"
    },
    about: {
      title: "Skills & About",
      meta: "Minimal, structured",
      copy: "Full Stack Developer with 3 years of experience building web applications with .NET Core and Angular, focused on clean architecture and scalable solutions."
    },
    contact: {
      title: "Contact",
      meta: "Write a mail or connect on LinkedIn",
      copy: "If you would like to collaborate, write a mail or directly DM me on LinkedIn.",
      actions: [
        {
          type: "gmail",
          label: "Write a mail",
          href: "mailto:2pkashyap2001@gmail.com"
        },
        {
          type: "linkedin",
          label: "Directly DM me on LinkedIn",
          href: "https://www.linkedin.com/in/coder-pro10z/"
        }
      ],
      form: {
        subjectLabel: "Subject",
        subjectPlaceholder: "Project discussion",
        messageLabel: "Message",
        messagePlaceholder: "Write your message here...",
        submitLabel: "Send Email"
      }
    }
  }
};
