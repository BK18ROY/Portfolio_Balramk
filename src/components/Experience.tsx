"use client";

import React, { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  Building2,
} from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>("odio");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-space-950/40"
      aria-label="Professional Experience"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Experience.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Proven track record of architecting, deploying, and maintaining production AI, machine learning, and cloud infrastructure.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Glowing Line */}
          <div className="absolute left-4 md:left-8 top-3 bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500/40" />

          <div className="space-y-10">
            {EXPERIENCES.map((exp) => {
              const isExpanded = expandedId === exp.id;

              return (
                <div key={exp.id} className="relative pl-12 md:pl-20 group">
                  {/* Glowing Node */}
                  <div
                    className={`absolute left-[7px] md:left-[23px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 -translate-x-1/2 flex items-center justify-center ${
                      exp.current
                        ? "bg-cyan-400 border-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.8)] scale-110"
                        : "bg-space-900 border-cyan-500/60 group-hover:border-cyan-400 group-hover:scale-110"
                    }`}
                  >
                    {exp.current && (
                      <span className="w-2 h-2 rounded-full bg-space-950 animate-ping" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`rounded-2xl border transition-all duration-300 ${
                      exp.current
                        ? "glass-panel border-cyan-500/30 shadow-lg shadow-cyan-500/5 hover:border-cyan-400/50"
                        : "bg-white/[0.02] border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.04]"
                    } p-6 sm:p-7`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-wider uppercase rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                              CURRENT ROLE
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mt-1.5 text-sm text-cyan-300 font-medium">
                          <Building2 className="w-4 h-4 text-cyan-400" />
                          <span>{exp.company}</span>
                        </div>
                      </div>

                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 w-fit">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Responsibilities list */}
                    <div className="pt-4 space-y-3">
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Key Responsibilities &amp; Impact
                      </div>

                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-2" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Technical Details */}
                    {isExpanded && (
                      <div className="pt-5 mt-5 border-t border-white/[0.06] space-y-3 animate-in fade-in duration-200">
                        <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                          Applied Competencies &amp; Stack
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 text-cyan-200 border border-cyan-500/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Toggle expand button */}
                    <div className="pt-4 mt-3 flex justify-end">
                      <button
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none"
                      >
                        <span>{isExpanded ? "Collapse Details" : "Expand Details"}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
