"use client";

import React, { useState } from "react";
import {
  Brain,
  Cpu,
  Database,
  Cloud,
  Sparkles,
  Network,
} from "lucide-react";
import { CAPABILITIES } from "@/data/portfolioData";

const PILL_HIGHLIGHTS = [
  "Machine Learning",
  "Generative AI",
  "LLMs",
  "RAG",
  "NLP",
  "Conversational AI",
  "Cloud Architecture",
  "Production Systems",
  "Client-Facing Delivery",
];

export default function About() {
  const [selectedCapability, setSelectedCapability] = useState<number>(0);

  const getCapabilityIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return Cpu;
      case "Database":
        return Database;
      case "Network":
        return Network;
      case "Cloud":
        return Cloud;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden" aria-label="About Balram Kumar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineering AI that{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              solves real problems.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Bridging cutting-edge foundational models, retrieval-augmented intelligence, and high-reliability cloud deployment.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Summary & Key Areas */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl glass-panel border border-white/[0.08] relative overflow-hidden space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-wide uppercase font-mono">
                    Professional Summary
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">
                    Authoritative Resume Overview
                  </span>
                </div>
              </div>

              <div className="text-slate-300 text-base leading-relaxed space-y-4 font-normal">
                <p>
                  Data Scientist with <strong className="text-white font-semibold">2+ years of experience</strong> building and shipping production ML, NLP, and Generative AI systems — including <span className="text-cyan-300 font-medium">LLM-based RAG pipelines</span>, fine-tuned language models, and real-time conversational AI.
                </p>
                <p>
                  Currently working as a <strong className="text-white font-semibold">Junior Data Scientist</strong>, partnering directly with product and engineering teams to translate business problems into deployed AI solutions, in the style of a <span className="text-blue-300 font-medium">Forward Deployed Engineer</span>.
                </p>
                <p>
                  Proficient across the full ML lifecycle — data engineering, model development, evaluation, and cloud deployment (<span className="text-slate-100 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06]">AWS</span>, <span className="text-slate-100 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06]">GCP/Vertex AI</span>, <span className="text-slate-100 font-mono text-xs px-1.5 py-0.5 rounded bg-white/[0.06]">Azure</span>) — with strong Python, SQL, and system-design skills.
                </p>
                <p className="text-slate-400 text-sm italic pt-1 border-t border-white/[0.06]">
                  Co-inventor on 3 patents and co-author of a published book chapter on IoT security (CRC Press).
                </p>
              </div>

              {/* Highlight Badges */}
              <div className="pt-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Technical Focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {PILL_HIGHLIGHTS.map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Capability Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Interactive Capability Cards
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Click to inspect details
              </span>
            </div>

            <div className="space-y-3.5">
              {CAPABILITIES.map((cap, index) => {
                const Icon = getCapabilityIcon(cap.icon);
                const isSelected = selectedCapability === index;

                return (
                  <div
                    key={cap.title}
                    onClick={() => setSelectedCapability(index)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-space-850 to-space-800 border-cyan-500/50 shadow-xl shadow-cyan-500/10 scale-[1.01]"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.12]"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isSelected
                            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                            : "bg-white/[0.04] text-slate-400 border border-white/[0.08]"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-semibold text-white tracking-tight">
                            {cap.title}
                          </h4>
                          {isSelected && (
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                              SELECTED
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                          {cap.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {cap.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                                isSelected
                                  ? "bg-cyan-500/15 text-cyan-200 border border-cyan-500/30"
                                  : "bg-white/[0.03] text-slate-400 border border-white/[0.06]"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
