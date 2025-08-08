import { NumberTicker } from "@/components/ui/number-ticker";

export default function Stats() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div className="rounded-xl px-4 py-6 bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm">
            <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
              <NumberTicker value={5} />+
            </div>
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
              Years coding
            </div>
          </div>
          <div className="rounded-xl px-4 py-6 bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm">
            <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
              <NumberTicker value={24} />+
            </div>
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
              Projects
            </div>
          </div>
          <div className="rounded-xl px-4 py-6 bg-white dark:bg-slate-900 ring-1 ring-slate-200 dark:ring-slate-800 shadow-sm">
            <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
              <NumberTicker value={8} />+
            </div>
            <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400 font-medium">
              Open source
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


