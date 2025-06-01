export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Beast Log - Minimalist Workout Logging App",
      desc: "Beast Log is a minimalist workout logging web app that transforms fitness tracking into a sleek, RPG-inspired experience. Users can seamlessly log exercises, reps, and sets while earning levels and rankings based on consistency and performance.",
      subdesc:
        "Built using Next.js and TypeScript for a performant frontend, Beast Log leverages Prisma ORM and Supabase for efficient data management. With custom UI components styled using shadcn/ui and enhanced by lucide-react icons, it delivers a responsive and engaging user experience across devices.",
      href: "https://beast-log.vercel.app/",
    texture: "/textures/project/beastlog.mp4",
    logo: "/assets/bfavicon.ico",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.3px solid #001F3F", 
boxShadow: "0px 0px 40px 0px #ffffff8f",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  {
    title: "Quack Note AI ",
    desc: "Quack Notes AI is an intelligent full-stack note-taking application that redefines how users interact with their notes. By leveraging AI-powered contextual chat, it lets users ask questions and gain insights directly from their own content.",
subdesc:
  "Built with bleeding-edge technologies like Next.js 15 App Router, Supabase, Prisma, Tailwind CSS, shadcn/ui, and integrated with Grok API, Quack Notes AI delivers a sleek, high-performance experience with secure auth, scalable data modeling, and dynamic AI chat capabilities.",
href: "https://quack-notes-ai.vercel.app",
    texture: "/textures/project/quack.mp4",
    logo: "/assets/quack.jpeg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.3px solid #001F3F", 
boxShadow: "0px 0px 50px 0px #1F3Fff",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  
  {
    title: "TodoMate - Task Management App",
      desc: "Task Manager is a powerful full-stack web application designed to streamline your productivity. It empowers users to efficiently manage tasks with features like intuitive task organization, and real-time updates — all wrapped in a clean, user-friendly interface.",
  subdesc:
    "Built using React.js with Chakra UI and Styled Components for a responsive UI, and powered by a Node.js + Express.js backend integrated with Supabase for authentication and database management. Includes custom middleware, React Router navigation, and a fully functional dark mode.",
      href: "https://task-manager-three-woad.vercel.app/",
    texture: "/textures/project/todo.mp4",
    logo: "/assets/Gemini.jpeg",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.3px solid #1FAA59", 
boxShadow: "0px 0px 60px 0px #1FAA59ff",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        ame: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/express.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  {
    title: "DisCode - Disaster Management Platform",
      desc: "DisCode is a comprehensive platform designed to bridge the communication and logistics gap between disaster victims, rescue operators, and relief providers. It empowers coordinated response efforts through real-time victim tracking, donation management, and priority-based medical logistics.",
subdesc:
  "Built as a full-stack web application, it features secure sign-in, transparent trust fund and inventory tracking, and a specialized medical sub-app for authorized personnel. Includes injury severity scoring, personal inventory options, real-time distribution logs, and robust integrations between civilians, healthcare units, and government agencies.",

      href: "https://dis-code-woad.vercel.app/",
    texture: "/textures/project/discode.mp4",
    logo: "/assets/discode.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.3px solid #1FAA59", 
boxShadow: "0px 0px 50px 0px #ffffffff",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        ame: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Express.js",
        path: "/assets/express.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
  {
    title: "SafeBite - Food Safety App",
      desc: "SafeBite is a mobile-first HealthTech application that empowers users to make safer food choices by scanning product barcodes or QR codes to detect harmful ingredients based on their health profiles. It also helps shopkeepers efficiently manage inventory through expiry tracking and sales insights.",
subdesc:
  "Built with React Native using Expo and NativeWind for sleek, responsive UI, and powered by a Node.js + Express.js backend hosted on Render. It features Supabase for user authentication and integrates with the Open Food Facts API for real-time ingredient analysis. AI-driven personalization, RESTful architecture, and support for shopkeeper dashboards make SafeBite a robust and scalable solution.",

      href: "https://github.com/Ajay-Krishna00/SafeBite",
    texture: "/textures/project/sb.mp4",
    logo: "/assets/logo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.3px solid #1FAA59", 
      boxShadow: "0px 0px 60px 0px #1FAA59ff",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        ame: "React.js",
        path: "/assets/react.svg",
        
      },
        {
          id: 3,
          name: "Express.js",
          path: "/assets/express.png",
        },
      {
        id: 2,
        name: "Nativewind",
        path: "assets/nativewind.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.png",
      },
    ],
  },
//   {
//     title: "Podcastr - AI Podcast Platform",
//     desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
//     subdesc:
//       "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
//     href: "https://www.youtube.com/watch?v=zfAb95tJvZQ",
//     texture: "/textures/project/project1.mp4",
//     logo: "/assets/project-logo1.png",
//     logoStyle: {
//       backgroundColor: "#2A1816",
//       border: "0.2px solid #36201D",
//       boxShadow: "0px 0px 60px 0px #AA3C304D",
//     },
//     spotlight: "/assets/spotlight1.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "LiveDoc - Real-Time Google Docs Clone",
//     desc: "LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.",
//     subdesc:
//       "With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.",
//     href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
//     texture: "/textures/project/project2.mp4",
//     logo: "/assets/project-logo2.png",
//     logoStyle: {
//       backgroundColor: "#13202F",
//       border: "0.2px solid #17293E",
//       boxShadow: "0px 0px 60px 0px #2F6DB54D",
//     },
//     spotlight: "/assets/spotlight2.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "CarePulse - Health Management System",
//     desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
//     subdesc:
//       "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
//     href: "https://www.youtube.com/watch?v=lEflo_sc82g",
//     texture: "/textures/project/project3.mp4",
//     logo: "/assets/project-logo3.png",
//     logoStyle: {
//       backgroundColor: "#60f5a1",
//       background:
//         "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
//       border: "0.2px solid rgba(208, 213, 221, 1)",
//       boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
//     },
//     spotlight: "/assets/spotlight3.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "Horizon - Online Banking Platform",
//     desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
//     subdesc:
//       "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
//     href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
//     texture: "/textures/project/project4.mp4",
//     logo: "/assets/project-logo4.png",
//     logoStyle: {
//       backgroundColor: "#0E1F38",
//       border: "0.2px solid #0E2D58",
//       boxShadow: "0px 0px 60px 0px #2F67B64D",
//     },
//     spotlight: "/assets/spotlight4.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
//   {
//     title: "Imaginify - AI Photo Manipulation App",
//     desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
//     subdesc:
//       "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
//     href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
//     texture: "/textures/project/project5.mp4",
//     logo: "/assets/project-logo5.png",
//     logoStyle: {
//       backgroundColor: "#1C1A43",
//       border: "0.2px solid #252262",
//       boxShadow: "0px 0px 60px 0px #635BFF4D",
//     },
//     spotlight: "/assets/spotlight5.png",
//     tags: [
//       {
//         id: 1,
//         name: "React.js",
//         path: "/assets/react.svg",
//       },
//       {
//         id: 2,
//         name: "TailwindCSS",
//         path: "assets/tailwindcss.png",
//       },
//       {
//         id: 3,
//         name: "TypeScript",
//         path: "/assets/typescript.png",
//       },
//       {
//         id: 4,
//         name: "Framer Motion",
//         path: "/assets/framer.png",
//       },
//     ],
//   },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "IEDC MEC",
    pos: "Frontend Developer",
    duration: "2024 - 2025",
    title:
      "I developed and maintained the official IEDC website, delivering a modern UI/UX. I built interactive web features to highlight events, projects, and achievements, and collaborated closely with designers and event coordinators to ensure seamless, real-time event updates.",
    icon: "/assets/iedc.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "TLE MEC",
    pos: "Competitive Programming Member",
    duration: "2024 - 2025",
    title:
      "At MEC, I help organize competitive programming events, support smooth execution, and grow my skills through group problem-solving and algorithm-focused sessions.",
    icon: "/assets/tle.jpg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Training Cell",
    pos: "JTC",
    duration: "2025 - Present",
    title:
      "As a member of the Training Cell, I’m responsible for preparing current-year peers for placements through coding, aptitude, and group discussion sessions. I also help organize all training and placement-related events.",
    icon: "/assets/mec.jpg",
    animation: "salute",
  },
];

export const techKnowledge = [
  {
    category: "Frontend Tools & Frameworks",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Vite",
      "Tailwind CSS",
      "NativeWind",
      "Material UI",
      "Chakra UI",
    ],
  },
  {
    category: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "SupaBase",
      "Firebase",
      "PrismaORM",
    ],
  },
  {
    category: "Languages & Core Technologies",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "C++",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Other Tools & Libraries",
    items: [
      "Three.js",
      "React Three Fiber",
      "Drei",
      "GSAP",
      "Git",
      "Vercel",
      "Render",
    ],
  },
];


export const heroText = [
  { text: "Ideas", img: "/assets/ideas.svg" },
  { text: "Code", img: "/assets/code.svg" },
  { text: "Solutions", img: "/assets/concepts.svg" },
  { text: "Designs", img: "/assets/designs.svg" },
  { text: "Dreams", img: "/assets/concepts.svg" },
];
