"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BorderBeam } from "@/components/ui/border-beam";
import { Reveal } from "../magicui/reveal";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Tell me a bit more")
});

type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });

  function onSubmit(values: FormValues) {
    console.log(values);
    reset();
  }

  return (
    <Reveal>
    <section id="contact" className="container mx-auto px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-violet-600 to-sky-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s chat about how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="relative">
            <div className="backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-2xl p-8 md:p-10">
              <BorderBeam size={500} duration={15} delay={0} />
              
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-8">Send me a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Name</label>
                  <input 
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-700 px-4 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-sm" 
                    {...register("name")} 
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-xs text-rose-600 mt-2 font-medium">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Email</label>
                  <input 
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-700 px-4 py-4 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all shadow-sm" 
                    {...register("email")} 
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-xs text-rose-600 mt-2 font-medium">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Message</label>
                  <textarea 
                    className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-700 px-4 py-4 min-h-40 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-none shadow-sm" 
                    {...register("message")} 
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && <p className="text-xs text-rose-600 mt-2 font-medium">{errors.message.message}</p>}
                </div>
                
                <div className="relative pt-4">
                  <button 
                    disabled={isSubmitting} 
                    className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white shadow-lg ring-1 ring-black/5 hover:shadow-xl transform hover:-translate-y-0.5 transition-all w-full justify-center text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a7.646 7.646 0 110 15.292V12" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                  <BorderBeam size={300} duration={10} delay={2} />
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="relative rounded-2xl border border-black/5 bg-white dark:bg-zinc-800 dark:border-white/10 shadow-xl p-8">
              <BorderBeam size={350} duration={12} delay={1} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:njlee007@gmail.com" 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20 hover:from-sky-100 hover:to-sky-200 dark:hover:from-sky-800/30 dark:hover:to-sky-700/30 transition-all"
                >
                  <div className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">njlee007@gmail.com</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/nathaniel-lee-443244327" 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 hover:from-violet-100 hover:to-violet-200 dark:hover:from-violet-800/30 dark:hover:to-violet-700/30 transition-all" 
                  target="_blank"
                >
                  <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">LinkedIn</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Connect with me</div>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/nathanL534" 
                  className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 hover:from-emerald-100 hover:to-emerald-200 dark:hover:from-emerald-800/30 dark:hover:to-emerald-700/30 transition-all" 
                  target="_blank"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">GitHub</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">Check out my code</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="relative rounded-2xl border border-black/5 bg-white dark:bg-zinc-800 dark:border-white/10 shadow-xl p-8">
              <BorderBeam size={250} duration={10} delay={3} />
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Quick Response</h4>
                <p className="text-base text-slate-600 dark:text-slate-300">
                  I typically respond within 24 hours. Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Reveal>
  );
}


