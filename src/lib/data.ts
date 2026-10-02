import wazicare from "@/assets/projects/wazicare.webp";
import sparkle from "@/assets/projects/sparkle-clean.webp";
import bonke from "@/assets/projects/bonke-studios.webp";
import event from "@/assets/projects/event-booking.webp";
import hotel from "@/assets/projects/hotel-booking.webp";
import murzik from "@/assets/projects/murzik.webp";
import portfolio from "@/assets/projects/portfolio.webp";

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
    live: "https://sparkleclean-ke.vercel.app/",
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
    live: "https://mcdotkiplalang.mcdot.workers.dev/",
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
    title: "Murzik",
    tagline: "Premium Mursik · Kenya",
    description:
      "An e-commerce platform for premium mursik (traditional fermented milk), connecting customers directly to the source. Features product browsing by form and size, secure M-Pesa STK Push checkout, and Cloudinary-powered image delivery for a fast, visual shopping experience.",
    stack: ["React", "Node.js", "MongoDB", "Cloudinary", "M-Pesa STK Push"],
    image: murzik,
    live: "https://fresh-murzik.vercel.app/",
    github: "https://github.com/skywalker2004",
  },
  {
    title: "Personal Portfolio",
    tagline: "This very site",
    description:
      "Engineered for performance, accessibility and design excellence. Lighthouse 95+. Built with React, Framer Motion & Tailwind.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    image: portfolio,
    live: "https://kelvin-kiprono-portfolio.vercel.app/",
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
    org: "Institute of Software Technologies",
    description:
      "Software engineering, networking, databases and systems administration — graduated with hands-on project work.",
    kind: "edu",
  },
  {
    year: "2023",
    title: "Node.js & Express Certification",
    org: "Institute of Software Technologies",
    description: "Production-grade APIs, authentication, validation and deployment patterns.",
    kind: "cert",
  },
  {
    year: "2023",
    title: "React Developer Certification",
    org: "Institute of Software Technologies",
    description: "Modern React, hooks, state management, performance and testing.",
    kind: "cert",
  },
  {
    year: "2022",
    title: "HTML, CSS & JavaScript",
    org: "Institute of Software Technologies",
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
    name: "Amos Kiplalang",
    role: "MC",
    company: "Event Booking System",
    quote:
      "As someone who hosts events regularly, I needed a booking system that just works under pressure — Kelvin delivered exactly that. It's reliable, handles real-time bookings smoothly, and has made coordinating events far less stressful.",
  },
  {
    name: "Kelvin Kiprono",
    role: "Owner & Developer",
    company: "Personal Portfolio",
    quote:
      "I built this site to reflect how I actually work — clean code, thoughtful design, and attention to the details that matter. It's a living project I keep refining as I grow, and it represents the standard I hold myself to on every build.",
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies Mastered" },
  { value: 20, suffix: "+", label: "Cups of Coffee" },
  { value: 4, suffix: "+", label: "Years Learning" },
];
