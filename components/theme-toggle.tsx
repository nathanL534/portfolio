"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = theme === "dark" || (!theme && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 px-3 py-2 text-sm text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-white/10 transition-colors shadow-sm"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}


