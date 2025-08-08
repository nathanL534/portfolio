import { TypingAnimation } from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "../ui/number-ticker";
import { NeonGradientCard } from "../magicui/neon-gradient-card";
import { Reveal } from "../magicui/reveal";

export default function About() {
  return (
    <Reveal>
    <section id="about" className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/30 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto mt-6">
            Get to know the person behind the code
          </p>
        </div>


        <NeonGradientCard>
        {/* Main Card */}
        <div className="relative backdrop-blur-xl bg-white/90 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 transition hover:shadow-3xl">
          <BorderBeam size={600} duration={15} delay={0} />
          
          <div className="space-y-8">
            {/* Greeting */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-zinc-600 dark:text-zinc-300 mb-4">
                Hi, I&apos;m
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent tracking-tight mb-6">
                Nathan
              </h1>
            </div>

            {/* Typing Animation */}
            <div className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-300">
              <TypingAnimation
                words={[
                  "I build things for the web",
                  "I love clean, efficient code", 
                  "I create amazing user experiences",
                  "I'm passionate about modern web tech"
                ]}
                className="font-medium"
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
              I&apos;m a software engineer with a background in Computer Science who specializes in building 
              exceptional digital experiences. Currently focused on creating accessible, human-centered products 
              using modern web technologies. When I&apos;m not coding, you&apos;ll find me exploring new frameworks 
              or contributing to open source projects.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-md p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent mb-2">5+</div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Years Experience</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-md p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">24+</div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Projects Built</div>
              </div>
              <div className="rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-md p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-sky-500 bg-clip-text text-transparent mb-2">8+</div>
                <div className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Open Source</div>
              </div>
            </div>
          </div>
        </div>
        </NeonGradientCard>
      </div>
    </section>
    </Reveal>
  );
}


