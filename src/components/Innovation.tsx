"use client";

import React, { useState } from "react";
import {
  Award,
  Calendar,
  FileCheck,
  Shield,
  Activity,
  Bot,
  CheckCircle2,
} from "lucide-react";
import { PATENTS } from "@/data/portfolioData";

export default function Innovation() {
  const [selectedPatent, setSelectedPatent] = useState<string>("sleep-paralysis");

  const getPatentIcon = (id: string) => {
    switch (id) {
      case "sleep-paralysis":
        return Activity;
      case "toddler-feeding":
        return Bot;
      case "hygiene-device":
        return Shield;
      default:
        return Award;
    }
  };

  return (
    <section
      id="innovation"
      className="py-24 relative overflow-hidden"
      aria-label="Patents and Innovation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>INTELLECTUAL PROPERTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Patents &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Innovation.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Co-inventor on 3 officially issued patents spanning embedded medical monitoring, robotic assistive feeding, and smart sanitary sensing.
          </p>
        </div>

        {/* Patent Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PATENTS.map((patent) => {
            const Icon = getPatentIcon(patent.id);
            const isSelected = selectedPatent === patent.id;

            return (
              <div
                key={patent.id}
                onClick={() => setSelectedPatent(patent.id)}
                className={`p-7 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isSelected
                    ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/10 scale-[1.01] bg-space-850/80"
                    : "border-white/[0.08] hover:border-white/[0.18] hover:bg-white/[0.03]"
                }`}
              >
                <div className="space-y-5 text-left">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <FileCheck className="w-3.5 h-3.5" />
                      <span>OFFICIALLY ISSUED</span>
                    </span>
                  </div>

                  {/* Title & Metadata */}
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug group-hover:text-cyan-200 transition-colors">
                      {patent.title}
                    </h3>
                    <div className="flex flex-col gap-1 mt-2 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400 font-semibold">App No:</span>
                        <span className="text-slate-200">{patent.applicationNo}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>Issued: {patent.issueDate}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description from resume */}
                  <p className="text-slate-300 text-sm leading-relaxed font-normal">
                    {patent.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Technical Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {patent.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hardware / Tech Chips */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {patent.hardwareOrTech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
