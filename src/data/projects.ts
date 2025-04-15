export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  image: string;
  previewUrl: string;
  github: string;
  preview: string;
}

const projects: Project[] = [
  {
    title: "MCQGen",
    description: "AI-powered MCQ generator for educators and students",
    longDescription: "An innovative tool that uses artificial intelligence to generate multiple choice questions. Perfect for educators, students, and professionals.",
    tech: ["AI", "Education", "Assessment"],
    image: "/globe.svg",
    previewUrl: "https://mcqgen.xyz",
    github: "https://mcqgen.xyz",
    preview: "/projects/mcqgen-preview.png"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    longDescription: "A comprehensive e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and secure payments.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/window.svg",
    previewUrl: "https://example.com/ecommerce",
    github: "https://github.com/username/ecommerce",
    preview: "/projects/ecommerce-preview.png"
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with collaborative features",
    longDescription: "A real-time task management application that allows teams to collaborate effectively. Features include real-time updates, task assignment, progress tracking, and team chat.",
    tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
    image: "/file.svg",
    previewUrl: "https://example.com/taskapp",
    github: "https://github.com/username/taskapp",
    preview: "/projects/taskapp-preview.png"
  },
  {
    title: "Portfolio Website",
    description: "Modern and responsive portfolio website with dark mode support",
    longDescription: "A modern portfolio website built with Next.js and Tailwind CSS. Features include dark mode support, responsive design, and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "shadcn/ui"],
    image: "/globe.svg",
    previewUrl: "https://example.com/portfolio",
    github: "https://github.com/username/portfolio",
    preview: "/projects/portfolio-preview.png"
  },
  {
    title: "Social Media Dashboard",
    description: "Comprehensive social media management dashboard",
    longDescription: "A powerful dashboard for managing multiple social media accounts with analytics, scheduling, and engagement tracking features.",
    tech: ["Vue.js", "Node.js", "PostgreSQL", "Chart.js"],
    image: "/file.svg",
    previewUrl: "https://example.com/dashboard",
    github: "https://github.com/username/dashboard",
    preview: "/projects/dashboard-preview.png"
  },
  {
    title: "Weather App",
    description: "Real-time weather tracking application",
    longDescription: "A weather application that provides real-time weather updates, forecasts, and severe weather alerts with interactive maps.",
    tech: ["React Native", "Weather API", "Google Maps", "Redux"],
    image: "/globe.svg",
    previewUrl: "https://example.com/weather",
    github: "https://github.com/username/weather",
    preview: "/projects/weather-preview.png"  }
];

export default projects;
