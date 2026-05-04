import wazicare from "@/assets/projects/wazicare.jpg";
import sparkle from "@/assets/projects/sparkle-clean.jpg";
import bonke from "@/assets/projects/bonke-studios.jpg";
import event from "@/assets/projects/event-booking.jpg";
import hotel from "@/assets/projects/hotel-booking.jpg";
import portfolio from "@/assets/projects/portfolio.jpg";

export type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string;
  live: string;
  github: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Wazicare",
    tagline: "Health Platform",
    description:
      "A telemedicine & health records platform enabling patients to book appointments, access medical records, and connect with doctors remotely.",
    stack: ["React", "Node.js", "MongoDB", "Express", "JWT Auth"],
    image: wazicare,
    live: "#",
    github: "https://github.com/skywalker2004",
  },
  {
    title: "Sparkle Clean",
    tagline: "Cleaning Service Platform",
    description:
      "A full-stack booking platform for a professional cleaning company — real-time availability, service selection, payment integration, and admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe API"],
    image: sparkle,
    live: "#",
    github: "https://github.com/skywalker2004",
  },
  {
    title: "Bonke Studios",
    tagline: "Music Studio Platform",
    description:
      "A feature-rich booking and portfolio site for a music studio — session scheduling, artist profiles, audio previews, and an intuitive admin panel.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary"],
    image: bonke,
    live: "#",
    github: "https://github.com/skywalker2004",
  },
  {
    title: "Event Booking System",
    tagline: "Ticketing Platform",
    description:
      "A robust event management system with real-time seat selection, QR-code ticketing, user authentication, and an organiser dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Express", "QR Code API"],
    image: event,
    live: "#",
    github: "https://github.com/skywalker2004",
  },
  {
    title: "Hotel Booking System",
    tagline: "Hospitality Platform",
    description:
      "A full-featured hotel reservation platform with room browsing, date-based availability, booking management, and a Laravel admin panel.",
    stack: ["Laravel", "MySQL", "Blade", "Bootstrap"],
    image: hotel,
    live: "#",
    github: "https://github.com/skywalker2004",
  },
  {
    title: "Personal Portfolio",
    tagline: "This very site",
    description:
      "Engineered for performance, accessibility and design excellence. Lighthouse 95+. Built with React, Framer Motion & Tailwind.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    image: portfolio,
    live: "#",
    github: "https://github.com/skywalker2004",
  },
];

export type SkillGroup = { label: string; skills: { name: string; icon: string; level: number }[] };

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", icon: "devicon-react-original colored", level: 92 },
      { name: "JavaScript", icon: "devicon-javascript-plain colored", level: 90 },
      { name: "HTML5", icon: "devicon-html5-plain colored", level: 95 },
      { name: "CSS3", icon: "devicon-css3-plain colored", level: 92 },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", level: 90 },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored", level: 88 },
      { name: "Express.js", icon: "devicon-express-original", level: 86 },
      { name: "Laravel", icon: "devicon-laravel-plain colored", level: 75 },
      { name: "REST APIs", icon: "devicon-fastapi-plain colored", level: 90 },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "MongoDB", icon: "devicon-mongodb-plain colored", level: 85 },
      { name: "MySQL", icon: "devicon-mysql-plain colored", level: 80 },
    ],
  },
  {
    label: "Tools & DevOps",
    skills: [
      { name: "Git", icon: "devicon-git-plain colored", level: 90 },
      { name: "GitHub", icon: "devicon-github-original", level: 92 },
      { name: "Postman", icon: "devicon-postman-plain colored", level: 85 },
      { name: "VS Code", icon: "devicon-vscode-plain colored", level: 95 },
      { name: "Docker", icon: "devicon-docker-plain colored", level: 65 },
      { name: "Linux CLI", icon: "devicon-linux-plain colored", level: 80 },
    ],
  },
];

export type TimelineItem = {
  year: string;
  title: string;
  org: string;
  description: string;
  kind: "work" | "edu" | "cert";
};

export const TIMELINE: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Freelance Full-Stack Developer",
    org: "Self-employed · Nairobi, Kenya",
    description:
      "Building scalable web solutions for clients across Kenya and internationally — owning delivery from discovery through deployment.",
    kind: "work",
  },
  {
    year: "2023",
    title: "IT Support Technician",
    org: "Nairobi, Kenya",
    description:
      "Hands-on networking, hardware troubleshooting, and systems administration for a busy office environment.",
    kind: "work",
  },
  {
    year: "2022 — 2024",
    title: "Diploma in Information Technology",
    org: "Technical University of Kenya",
    description:
      "Software engineering, networking, databases and systems administration — graduated with hands-on project work.",
    kind: "edu",
  },
  {
    year: "2023",
    title: "Node.js & Express Certification",
    org: "Udemy / freeCodeCamp",
    description: "Production-grade APIs, authentication, validation and deployment patterns.",
    kind: "cert",
  },
  {
    year: "2023",
    title: "React Developer Certification",
    org: "Meta / Coursera",
    description: "Modern React, hooks, state management, performance and testing.",
    kind: "cert",
  },
  {
    year: "2022",
    title: "HTML, CSS & JavaScript",
    org: "The Odin Project",
    description: "Foundational web development with project-driven learning.",
    kind: "cert",
  },
];

export const TESTIMONIALS = [
  {
    name: "Dr. Amina Osei",
    role: "CTO",
    company: "Wazicare",
    quote:
      "Kelvin delivered our health platform ahead of schedule. His attention to UX details and backend architecture blew our expectations.",
  },
  {
    name: "James Mwangi",
    role: "CEO",
    company: "Sparkle Clean",
    quote:
      "Professional, responsive, and technically brilliant. The booking system Kelvin built for us handles hundreds of reservations flawlessly.",
  },
  {
    name: "Tony B.",
    role: "Founder",
    company: "Bonke Studios",
    quote:
      "Kelvin transformed our studio's online presence completely. The site is fast, beautiful, and easy to manage.",
  },
];

export const STATS = [
  { value: 25, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 1240, suffix: "+", label: "Cups of Coffee" },
  { value: 4, suffix: "+", label: "Years Learning" },
];
