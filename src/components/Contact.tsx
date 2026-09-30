"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ArrowRight,
  Download,
} from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact Balram Kumar">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-600/10 via-blue-600/15 to-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="rounded-3xl glass-panel border border-white/[0.12] p-8 sm:p-12 lg:p-16 text-center space-y-8 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Top Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>AVAILABLE FOR FORWARD DEPLOYED &amp; AI/ML ROLES</span>
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s build{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                something intelligent.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Interested in Generative AI, Machine Learning, RAG, conversational AI, or production AI systems? Let&apos;s connect.
            </p>
          </div>

          {/* Direct Action Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
            
            {/* Email Channel */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-500/40 hover:bg-cyan-500/[0.04] transition-all flex flex-col justify-between text-left group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-md hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-xs font-mono text-slate-400">Direct Email</div>
                <div className="text-sm font-semibold text-white truncate" title={PERSONAL_INFO.email}>
                  {PERSONAL_INFO.email}
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 group-hover:translate-x-0.5 transition-all"
              >
                <span>Send Email</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Phone Channel */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-blue-500/40 hover:bg-blue-500/[0.04] transition-all flex flex-col justify-between text-left group">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded-md hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="text-xs font-mono text-slate-400">Direct Phone</div>
                <div className="text-sm font-semibold text-white font-mono">
                  {PERSONAL_INFO.phoneDisplay}
                </div>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
              >
                <span>Call Phone</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* LinkedIn Channel */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-indigo-500/[0.04] transition-all flex flex-col justify-between text-left group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-300">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400">Professional Network</div>
                <div className="text-sm font-semibold text-white">LinkedIn Profile</div>
              </div>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* GitHub Channel */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/40 hover:bg-violet-500/[0.04] transition-all flex flex-col justify-between text-left group">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400">Source Code &amp; Repos</div>
                <div className="text-sm font-semibold text-white">GitHub Profile</div>
              </div>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-mono text-violet-400 hover:text-violet-300 group-hover:translate-x-0.5 transition-all"
              >
                <span>Explore GitHub</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

          {/* Primary Action Button Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-cyan-400/40"
            >
              <Mail className="w-4 h-4" />
              <span>Email Balram Directly</span>
            </a>

            <a
              href="/resume.pdf"
              download="Balram_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-sm border border-white/[0.12] hover:border-slate-300 transition-all duration-200"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
