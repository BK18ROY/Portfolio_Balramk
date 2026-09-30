"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mail,
  Download,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Database,
  Radio,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

const PIPELINE_NODES = [
  { id: "data", label: "DATA", desc: "Raw Audio / Docs / Video", icon: Database, color: "text-cyan-400", border: "border-cyan-500/40", bg: "bg-cyan-500/10" },
  { id: "embeddings", label: "EMBEDDINGS", desc: "Vector Representations", icon: Layers, color: "text-blue-400", border: "border-blue-500/40", bg: "bg-blue-500/10" },
  { id: "ai", label: "AI", desc: "LLMs / Transformers / CNN", icon: Cpu, color: "text-indigo-400", border: "border-indigo-500/40", bg: "bg-indigo-500/10" },
  { id: "intelligence", label: "INTELLIGENCE", desc: "Reasoning & Context", icon: Sparkles, color: "text-violet-400", border: "border-violet-500/40", bg: "bg-violet-500/10" },
  { id: "production", label: "PRODUCTION", desc: "Sub-2s Cloud Endpoints", icon: Radio, color: "text-emerald-400", border: "border-emerald-500/40", bg: "bg-emerald-500/10" },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % PIPELINE_NODES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center"
      aria-label="Introduction and Overview"
    >
      {/* Background glowing gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/15 to-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Label / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-sm shadow-cyan-500/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase">
                DATA SCIENTIST • GENERATIVE AI • LLM • AI/ML
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building intelligent systems that move from{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                prototype to production.
              </span>
            </h1>

            {/* Supporting Content from Resume */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {PERSONAL_INFO.summary.split("Currently working")[0]}
            </p>

            {/* Title / Persona Pill */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 pt-1">
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                ⚡ Forward Deployed Mindset
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                ⚡ Sub-2s Latency AI
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                ⚡ 3 Patented Technologies
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollTo("projects")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-cyan-400/40 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-sm border border-white/[0.12] hover:border-slate-300 transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Let&apos;s Connect</span>
              </button>

              <a
                href="/resume.pdf"
                download="Balram_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-cyan-500/10 text-cyan-300 font-medium text-sm border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Technical AI Visualization */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-2xl p-6 sm:p-7 glass-panel border border-white/[0.1] shadow-2xl shadow-black/80 overflow-hidden">
              {/* Header of the visualization panel */}
              <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    ai_pipeline_runtime.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  <span>ONLINE • STREAMING</span>
                </div>
              </div>

              {/* Technical Pipeline Flow: DATA → EMBEDDINGS → AI → INTELLIGENCE → PRODUCTION */}
              <div className="py-6 space-y-3 relative">
                {/* Connecting subtle line */}
                <div className="absolute left-[26px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-cyan-500/30 via-indigo-500/30 to-emerald-500/30" />

                {PIPELINE_NODES.map((node, index) => {
                  const isActive = activeStep === index;
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      onClick={() => setActiveStep(index)}
                      className={`relative flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? `${node.bg} ${node.border} shadow-lg shadow-cyan-500/10 scale-[1.02]`
                          : "bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] opacity-80"
                      }`}
                    >
                      {/* Step Indicator / Icon */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-lg border ${
                          isActive
                            ? `${node.bg} ${node.border} ${node.color}`
                            : "bg-space-900 border-white/[0.1] text-slate-400"
                        } transition-colors`}
                      >
                        <Icon className="w-5 h-5" />
                        {isActive && (
                          <span className="absolute -inset-1 rounded-lg bg-cyan-400/20 animate-pulse pointer-events-none" />
                        )}
                      </div>

                      {/* Node Label & Description */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs font-bold tracking-wider text-white">
                            {node.label}
                          </span>
                          <span className="font-mono text-[10px] text-slate-400">
                            STEP 0{index + 1}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 truncate font-mono mt-0.5">
                          {node.desc}
                        </p>
                      </div>

                      {/* Active Status Badge */}
                      {isActive ? (
                        <div className="flex items-center gap-1 font-mono text-[10px] text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                          <span>ACTIVE</span>
                        </div>
                      ) : (
                        <div className="text-slate-600 font-mono text-xs">
                          →
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified End-to-End Latency:</span>
                </div>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  &lt; 2.0s Realtime
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
