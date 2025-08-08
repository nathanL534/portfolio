import { skills } from "@/data/skills";

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {skills.map(({ name, Icon }) => (
        <div 
          key={name}
          className="group inline-flex items-center gap-3 rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-md px-4 py-3 shadow-sm hover:shadow-md transition"
        >
          <Icon className="text-xl opacity-90 group-hover:scale-110 transition" />
          <span className="text-sm font-medium">{name}</span>
        </div>
      ))}
    </div>
  );
}
