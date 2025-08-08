export type Project = {
  slug: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  demo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    description: "Personal portfolio with animations and responsive design.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/project-portfolio.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    slug: "saas",
    name: "SaaS Dashboard",
    description: "Interactive analytics dashboard with charts and auth.",
    tech: ["Next.js", "Prisma", "Postgres"],
    image: "/project-saas.jpg",
    demo: "https://example.com",
    github: "https://github.com/yourusername/saas"
  }
];


