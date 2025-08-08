"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Experience() {
  return (
    <section id="experience" className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-violet-500 before:via-sky-500 before:to-emerald-500">
          <div className="space-y-12">
            {experience.map((e, idx) => (
              <motion.div
                key={e.company + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-6 mt-2 w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 ring-4 ring-white dark:ring-zinc-900 shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Content Card */}
                <div className="ml-8">
                  <div className="group relative backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 transition hover:shadow-3xl transform hover:-translate-y-1">
                    <BorderBeam size={400} duration={15} delay={idx * 2} />
                    
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">{e.role}</h3>
                          <p className="text-lg font-semibold text-sky-600 dark:text-sky-400">{e.company}</p>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-lg px-3 py-1.5 bg-gradient-to-r from-violet-50 to-sky-50 dark:from-violet-900/20 dark:to-sky-900/20 text-violet-700 dark:text-violet-300 text-sm font-medium shadow-sm ring-1 ring-violet-200/50 dark:ring-violet-800/50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {e.period}
                        </div>
                      </div>
                      
                      {/* Highlights */}
                      <div className="space-y-3">
                        {e.highlights.map((h) => (
                          <div key={h} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2"></div>
                            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{h}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="relative inline-block bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl p-8 shadow-xl">
            <BorderBeam size={400} duration={20} delay={1} />
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Let&apos;s Work Together</h3>
            <p className="text-blue-700 mb-6 max-w-md mx-auto">
              Ready to bring your next project to life? I&apos;d love to hear about your ideas and how we can collaborate.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
              💼 Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


