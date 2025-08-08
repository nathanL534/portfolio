import { 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiGit, 
  SiAmazonwebservices,
  SiMongodb,
  SiDocker,
  SiVercel,
  SiFirebase,
  SiPython,
  SiJavascript
} from "react-icons/si";
import { IconType } from "react-icons";

export interface Skill {
  name: string;
  Icon: IconType;
}

export const skills: Skill[] = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Git", Icon: SiGit },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "Docker", Icon: SiDocker },
  { name: "Vercel", Icon: SiVercel },
  { name: "Firebase", Icon: SiFirebase },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
];