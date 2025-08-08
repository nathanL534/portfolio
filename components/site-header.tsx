import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="#" className="font-semibold text-sky-700">NL</Link>
        <div className="hidden md:flex items-center gap-3">
          <nav className="flex items-center gap-4 rounded-full bg-white/70 supports-[backdrop-filter]:bg-white/70 backdrop-blur px-4 py-2 text-sm text-slate-600 shadow-sm ring-1 ring-slate-200">
            <Link href="#about" className="hover:text-sky-700">About</Link>
            <Link href="#projects" className="hover:text-sky-700">Projects</Link>
            <Link href="#skills" className="hover:text-sky-700">Skills</Link>
            <Link href="#experience" className="hover:text-sky-700">Experience</Link>
            <Link href="#resume" className="hover:text-sky-700">Resume</Link>
            <Link href="#contact" className="hover:text-sky-700">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>
        <div className="md:hidden"><ThemeToggle /></div>
      </div>
    </header>
  );
}


