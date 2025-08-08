import { BorderBeam } from "@/components/ui/border-beam";
import { Reveal } from "../magicui/reveal";

export default function Resume() {
  return (
    <Reveal>
    <section id="resume" className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Download my latest resume to learn more about my background and experience
          </p>
        </div>

        {/* Resume Card */}
        <div className="relative backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto">
          <BorderBeam size={400} duration={15} delay={0} />
          
          <div className="space-y-8">
            {/* Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                Nathan&apos;s Resume
              </h3>
              <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">
                Get a comprehensive overview of my skills, experience, and education. 
                The PDF includes detailed information about my projects and achievements.
              </p>
            </div>

            {/* Download Button */}
            <div className="relative">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg ring-1 ring-black/5 hover:shadow-xl transform hover:-translate-y-0.5 transition-all text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume</span>
              </a>
              <BorderBeam size={200} duration={10} delay={1} />
            </div>

            {/* Additional Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Format</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">PDF</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Size</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">2 Pages</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">Updated</div>
                <div className="text-base font-bold text-slate-900 dark:text-white">Dec 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}


