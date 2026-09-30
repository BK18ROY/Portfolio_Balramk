"use client";

import React, { useState } from "react";
import {
  Code2,
  Brain,
  Database,
  Cloud,
  Terminal,
  Layers,
  Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case "Programming & Data":
        return Code2;
      case "Machine Learning":
        return Brain;
      case "Generative AI & NLP":
        return Sparkles;
      case "Data Engineering":
        return Database;
      case "Cloud & DevOps":
        return Cloud;
      case "Development":
        return Terminal;
      default:
        return Layers;
    }
  };

  const filteredCategories =
    selectedFilter === "All"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.name === selectedFilter);

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-space-950/40"
      aria-label="Technical Skills and Stack"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Core Stack.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Comprehensive production capabilities across Generative AI, machine learning architectures, data pipelines, and cloud ecosystems.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <button
            onClick={() => setSelectedFilter("All")}
            className={`px-4 py-2 text-xs font-mono rounded-lg transition-all ${
              selectedFilter === "All"
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm shadow-cyan-500/10"
                : "bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedFilter(category.name)}
              className={`px-4 py-2 text-xs font-mono rounded-lg transition-all ${
                selectedFilter === category.name
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-sm shadow-cyan-500/10"
                  : "bg-white/[0.03] text-slate-400 border border-white/[0.08] hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.name);

            return (
              <div
                key={category.name}
                className="p-6 rounded-2xl glass-panel border border-white/[0.08] hover:border-cyan-500/40 hover:bg-space-850/60 transition-all duration-300 space-y-4 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-white/[0.06]">
                  <div
                    className={`w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center ${category.iconColor} group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      {category.skills.length} Core Technologies
                    </span>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-200 border border-white/[0.08] hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200 transition-all cursor-default"
                    >
                      {skill}
                    </div>
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
