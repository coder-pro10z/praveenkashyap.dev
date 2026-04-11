const portfolioData = {
  profile: {
    name: "Praveen Kashyap",
    title: "Software Engineer at Coforge",
    tagline: "Scalable <span class='highlight'>ASP.NET Core</span> APIs, dynamic <span class='highlight'>Angular</span> SPAs, and robust <span class='highlight'>.NET architecture</span> - focusing on <span class='highlight'>clean code</span> and <span class='highlight'>performance improvements</span>.",
    email: "[2pkashyap2001@gmail.com](mailto:2pkashyap2001@gmail.com)",
    location: "Noida, India",
    availability: "Open to opportunities",
    links: {
      github: "https://github.com/coder-pro10z",
      linkedin: "https://www.linkedin.com/in/coder-pro10z/",
      resume: "./Resume/Praveen_Kashyap_Dotnet_Resume_April.pdf",
      phone: "tel:+917394990738"
    },
    brandMark: "</>",
    brandName: "Portfolio"
  },

  skills: {
    backend: ["ASP.NET Core", ".NET Core", "C#", "Entity Framework Core"],
    frontend: ["Angular", "TypeScript", "RxJS", "React"],
    database: ["SQL Server", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker", "Postman", "Swagger"],
    methodologies: ["Clean Architecture", "Repository Pattern", "DI / IoC", "SOLID", "Agile"]
  },

  experience: [
    {
      company: "Coforge",
      role: "Software Engineer",
      duration: "Jan 2024 - Present",
      timelineStatus: "live",
      tags: ["Coforge"],
      highlights: [
        "Lead development on ASP.NET Core APIs with role-based authorization - reduced auth-related bugs by enforcing policy-based access control",
        "Optimized SQL Server queries and EF Core configurations - improved endpoint response times on high-load routes",
        "Enforced SOLID principles and DI patterns across the codebase - reduced inter-module coupling and improved testability",
        "Identified and resolved XSS and open redirect vulnerabilities - hardened API surface across 3 enterprise modules",
        "Contributed to design reviews, code reviews, and sprint deliveries in a 6-person Agile team"
      ],
      tech: ["ASP.NET Core", "C#", "SQL Server", "Angular", "Entity Framework Core"]
    },
    {
      company: "Coforge",
      role: "Graduate Engineer Trainee (GET)",
      duration: "Jul 2022 - Dec 2023",
      timelineStatus: "past",
      tags: ["Coforge"],
      highlights: [
        "Completed structured training in ASP.NET Core, Angular, SQL Server, and software engineering fundamentals",
        "Built internal training projects applying repository pattern, API design, and Angular module structure",
        "Contributed to production bug fixes and feature additions under senior engineer mentorship",
        "Gained hands-on exposure to CI/CD pipelines, Git branching workflows, and enterprise code standards"
      ],
      tech: ["ASP.NET Core", "C#", "Angular", "SQL Server"]
    },
    {
      company: "Self-Initiated",
      role: "Web Developer Intern (Project-Based)",
      duration: "Jan 2022 - Jun 2022",
      timelineStatus: "past",
      tags: ["Self-Initiated", "Remote"],
      highlights: [
        "Built RentIt - a full-stack property rental marketplace using React, Node.js, and MongoDB",
        "Designed document-based MongoDB schema and implemented secure JWT authentication",
        "Developed reusable React components - search, filter, and booking flows"
      ],
      tech: ["React", "Node.js", "MongoDB", "JavaScript"]
    }
  ],

  projects: [
    {
      title: "Money Pilot",
      description: "Personal finance tracker with a clean service-layer backend and component-driven Angular frontend - focused on data accuracy, secure flows, and responsive UX.",
      image: "./Image/Card_Image_1.jpg",
      highlights: [
        "Designed RESTful API endpoints using ASP.NET Core with Dependency Injection and repository pattern architecture",
        "Built a fully responsive Angular SPA with modular components and clean service abstractions",
        "Implemented role-based access control and secure user authentication with JWT"
      ],
      tech: ["ASP.NET Core", "Angular", "C#", "SQL Server"],
      service: "Full Stack · ASP.NET Core + Angular",
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
      description: "Property rental marketplace with a flexible NoSQL data layer, interactive React UI, and secure booking workflows - designed to support multi-landlord listings at scale.",
      image: "./Image/Card_Image_2.jpg",
      highlights: [
        "Designed a document-based MongoDB schema to support flexible listing attributes and efficient query patterns",
        "Developed reusable React components with search, filter, and booking flows",
        "Implemented JWT-based authentication and protected API routes for landlord and tenant role separation"
      ],
      tech: ["React", "Node.js", "MongoDB"],
      service: "Full Stack · React + Node.js + MongoDB",
      icon: {
        type: "material-symbols-outlined",
        name: "home"
      },
      link: "https://github.com/coder-pro10z/RentIt",
      linkLabel: "View Repository",
      demoLink: "",
      demoLabel: ""
    },
    {
      title: "FullStackMastery",
      description: "A comprehensive full-stack assessment platform tailored for .NET and Angular developers.",
      image: "./Image/Card_Image_3.jpg",
      highlights: [
        "Architected a modular ASP.NET Core backend utilizing Clean Architecture and SOLID principles to efficiently manage question banks, file parsing, and user progress analytics.",
        "Developed a dynamic Angular frontend featuring instant-feedback mock quizzes, timed professional assessments, and curated technical study guides."
      ],
      tech: [".NET Core", "Angular", "C#", "SQL Server"],
      service: "Full Stack · .NET Core + Angular",
      icon: {
        type: "material-symbols-outlined",
        name: "menu_book"
      },
      link: "https://github.com/coder-pro10z/FullStackMastery",
      linkLabel: "View Repository",
      demoLink: "",
      demoLabel: ""
    }
  ],

  achievements: [
    "3 years delivering production full-stack web applications across .NET Core, Angular, and React",
    "Consistent focus on clean architecture: separation of concerns, DI patterns, and maintainable service layers",
    "Experienced building RESTful APIs and Angular SPAs end-to-end - from schema design to deployment",
    "Actively building an Interview Prep Platform for the .NET community - in use for self-assessment"
  ],

  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/coder-pro10z/" },
    { label: "GitHub", href: "https://github.com/coder-pro10z" },
    { label: "Resume", href: "./Resume/Praveen_Kashyap_Dotnet_Resume_April.pdf" }
  ],

  navigation: [
    { label: "Professional Experience", href: "#experience" },
    { label: "Projects", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    eyebrow: "Full Stack .NET Developer · 3 Years",
    actions: [
      { label: "Projects", href: "#portfolio", variant: "primary" },
      { label: "Resume", href: "./Resume/Praveen_Kashyap_Dotnet_Resume_April.pdf", variant: "success" }
    ]
  },

  sections: {
    experience: {
      title: "Professional Experience",
      meta: "Professional work history"
    },
    projects: {
      title: "Selected Projects",
      meta: "Scalable systems, clean architecture, measurable impact"
    },
    about: {
      title: "Skills & About",
      meta: "Focused on clean architecture and shipping quality software",
      copy: "I build full-stack web applications using ASP.NET Core on the backend and Angular on the frontend. My focus is on clean architecture, separation of concerns, and systems that are easy to extend and maintain. Outside of my work at Coforge, I'm building an interview prep platform for the .NET community."
    },
    contact: {
      title: "Contact",
      meta: "Open to collaborations and new opportunities",
      copy: "If you'd like to discuss a project or opportunity, reach out by mail or connect on LinkedIn.",
      actions: [
        {
          type: "gmail",
          label: "Write a mail",
          href: "mailto:2pkashyap2001@gmail.com"
        },
        {
          type: "linkedin",
          label: "Connect on LinkedIn",
          href: "https://www.linkedin.com/in/coder-pro10z/"
        },
        {
          type: "github",
          label: "View GitHub",
          href: "https://github.com/coder-pro10z"
        },
        {
          type: "phone",
          label: "Call Me",
          href: "tel:+917394990738"
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
