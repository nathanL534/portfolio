// import Image from "next/image"; // Temporarily removed
"use client"

import { projects } from "@/data/projects";
import Link from "next/link";
import { BorderBeam } from "@/components/ui/border-beam";
import { Reveal } from "../magicui/reveal";

export default function Projects() {
  return (
    <Reveal>
    <section id="projects" className="container mx-auto px-4 md:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50/30 to-white dark:from-zinc-800 dark:to-zinc-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <div key={p.slug} className="group relative backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 transition hover:shadow-3xl transform hover:-translate-y-1">
              <BorderBeam size={350} duration={12} delay={index * 1.5} />
              
              {/* Project Placeholder - Images temporarily removed */}
              <div className="aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-violet-100/50 to-sky-100/50 dark:from-violet-900/20 dark:to-sky-900/20 border border-black/5 dark:border-white/10 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-sky-500 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Project Preview</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-white">{p.name}</h3>
                
                {/* Description */}
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{p.description}</p>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span 
                      key={t} 
                      className="inline-flex items-center gap-1 rounded-2xl px-3 py-1.5 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 text-sm font-medium shadow-sm"
                    >
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      {t}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  {p.demo && (
                    <Link 
                      href={p.demo} 
                      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-gradient-to-r from-violet-500 to-sky-500 hover:from-violet-600 hover:to-sky-600 text-white shadow-lg ring-1 ring-black/5 hover:shadow-xl transform hover:-translate-y-0.5 transition-all" 
                      target="_blank"
                    >
                      <span>Live Demo</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                  {p.github && (
                    <Link 
                      href={p.github} 
                      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium bg-white/70 dark:bg-white/5 text-zinc-900 dark:text-white border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all" 
                      target="_blank"
                    >
                      <span>View Code</span>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </Reveal>
  );
}


