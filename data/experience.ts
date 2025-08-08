export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Acme Corp",
    role: "Software Engineer",
    period: "2022 – Present",
    highlights: [
      "Built performant React components with accessibility in mind",
      "Led migration to Next.js App Router",
      "Improved Lighthouse performance to 95+"
    ]
  },
  {
    company: "Startup XYZ",
    role: "Frontend Developer",
    period: "2020 – 2022",
    highlights: [
      "Shipped design system with Tailwind CSS",
      "Implemented client-side caching to cut API calls by 35%"
    ]
  }
];


