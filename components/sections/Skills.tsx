import SkillsGrid from "@/components/SkillsGrid";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-white dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <SkillsGrid />
        </div>

        {/* Learning Section */}
        <div className="text-center">
          <div className="relative backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <BorderBeam size={600} duration={20} delay={1} />
            
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Always Learning
              </h3>
              
              <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
                Constantly exploring new technologies and staying up-to-date with the latest trends in web development. 
                Here are some of the tools I&apos;m currently excited about:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <div className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-md font-medium">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  Next.js 15
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-md font-medium">
                  <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
                  Vite 5
                </div>
                <div className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-md font-medium">
                  <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                  Framer Motion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


