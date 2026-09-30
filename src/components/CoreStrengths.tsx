"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Lightbulb,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { CORE_STRENGTHS } from "@/data/portfolioData";

export default function CoreStrengths() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return Briefcase;
      case "Lightbulb":
        return Lightbulb;
      case "BarChart3":
        return BarChart3;
      case "MessageSquare":
        return MessageSquare;
      case "ShieldCheck":
        return ShieldCheck;
      default:
        return CheckCircle;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-space-950/40" aria-label="Core Strengths">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>PROFESSIONAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Strengths.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            High-leverage engineering attributes honed through client-facing delivery, technical scoping, and patent invention.
          </p>
        </div>

        {/* 5 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CORE_STRENGTHS.map((strength, index) => {
            const Icon = getStrengthIcon(strength.icon);
            const isHovered = activeCard === index;

            return (
              <div
                key={strength.title}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`p-6 rounded-2xl glass-panel border transition-all duration-300 text-left flex flex-col justify-between cursor-pointer group ${
                  isHovered
                    ? "border-cyan-500/50 bg-space-850/90 shadow-xl shadow-cyan-500/10 -translate-y-1"
                    : "border-white/[0.08] hover:border-white/[0.18]"
                }`}
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-300 group-hover:scale-105 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                      {strength.title}
                    </h3>
                    <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                      {strength.subtitle}
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {strength.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>IMPACT FOCUS</span>
                  <span className="text-cyan-400">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
