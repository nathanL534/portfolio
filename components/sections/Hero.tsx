"use client";

import { TypingAnimation } from "@/components/ui/typing-animation";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Glass Card Container */}
        <div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-16">
          <BorderBeam size={600} duration={15} delay={0} />
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 text-zinc-700 dark:text-zinc-300 px-4 py-2 text-sm font-medium shadow-sm mb-8">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Available for new opportunities
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Nathan
            </span>
          </h1>
          
          {/* Tagline */}
          <div className="text-base md:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300 mb-8 max-w-3xl mx-auto">
            <TypingAnimation
              words={["Full‑stack Developer", "UI Engineer", "Creative Problem Solver", "Open Source Contributor"]}
              className="font-medium"
            />
          </div>
          
          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 mb-12 max-w-2xl mx-auto">
            I craft exceptional digital experiences with clean code and thoughtful design. 
            Passionate about building products that make a difference.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative">
              <BorderBeam size={200} duration={6} delay={1} />
              <Link href="#projects" className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-medium bg-gradient-to-r from-violet-500 to-sky-500 hover:from-violet-600 hover:to-sky-600 text-white shadow-lg ring-1 ring-black/5 hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <span>View My Work</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-medium bg-white/70 dark:bg-white/5 text-zinc-900 dark:text-white border border-black/5 dark:border-white/10 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <span>Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


