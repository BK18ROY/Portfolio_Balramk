import React from "react";
import { CREDIBILITY_METRICS } from "@/data/portfolioData";
import { Award, BookOpen, Clock, Cpu, Server } from "lucide-react";

const ICONS = [Clock, Award, BookOpen, Cpu, Server];

export default function CredibilityStrip() {
  return (
    <section className="relative z-20 py-8 border-y border-white/[0.08] bg-space-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {CREDIBILITY_METRICS.map((metric, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div
                key={metric.label}
                className="flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] transition-all duration-200 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-base sm:text-lg font-bold text-white tracking-tight truncate group-hover:text-cyan-200 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 truncate">
                    {metric.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
