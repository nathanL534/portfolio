import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/60 dark:bg-zinc-900/60 border-b border-black/5 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#" className="font-semibold text-sky-700 dark:text-sky-400">NL</Link>
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-4 rounded-full bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-2 text-sm text-zinc-600 dark:text-zinc-300 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
            <Link href="#about" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">About</Link>
            <Link href="#projects" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Projects</Link>
            <Link href="#skills" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Skills</Link>
            <Link href="#experience" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Experience</Link>
            <Link href="#resume" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Resume</Link>
            <Link href="#contact" className="hover:text-sky-700 dark:hover:text-sky-400 transition-colors">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>
        <div className="md:hidden"><ThemeToggle /></div>
      </div>
    </header>
  );
}


