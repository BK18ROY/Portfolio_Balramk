"use client";

import React, { useEffect, useRef } from "react";
import {
  X,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Workflow,
} from "lucide-react";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl max-h-[90vh] bg-space-900 border border-white/[0.12] rounded-2xl shadow-2xl shadow-black overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-space-950/90 backdrop-blur-md border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              {project.category}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors border border-white/[0.08]"
            aria-label="Close project modal (Escape)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 text-left">
          {/* Header */}
          <div className="space-y-2">
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            {project.subtitle && (
              <p className="text-cyan-400 text-sm font-mono">{project.subtitle}</p>
            )}
            <p className="text-slate-300 text-base leading-relaxed pt-2">
              {project.shortDescription}
            </p>
          </div>

          {/* Technology Stack Badges */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 text-cyan-200 border border-cyan-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="p-5 rounded-xl bg-space-950/60 border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider">
              <Workflow className="w-4 h-4" />
              <span>Pipeline Architecture</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              {project.architectureSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.08] font-bold">
                    {step}
                  </span>
                  {idx < project.architectureSteps.length - 1 && (
                    <span className="text-cyan-400 font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/[0.06]">
              {project.architectureDetails}
            </p>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider font-semibold">
                <AlertTriangle className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider font-semibold">
                <Lightbulb className="w-4 h-4" />
                <span>Technical Approach</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Engineering Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Engineering Deep-Dive
            </h3>
            <ul className="space-y-2.5">
              {project.engineeringDetails.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.04]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-cyan-950/40 via-space-900 to-indigo-950/40 border border-cyan-500/30 space-y-2">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
              Engineering Outcome &amp; Impact
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-medium">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 p-4 sm:p-5 bg-space-950/95 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/[0.08] text-slate-200">Esc</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/[0.08] hover:bg-white/[0.15] text-white transition-colors"
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
}
