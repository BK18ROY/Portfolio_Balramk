"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Copy,
  Check,
} from "lucide-react";
import { PUBLICATION } from "@/data/portfolioData";

export default function Research() {
  const [copied, setCopied] = useState<boolean>(false);

  const citationText = `Kumar, B. (2024). Intrusion and Malware Detection in IoT. In Secure Communication in IoT. CRC Press. eBook ISBN: ${PUBLICATION.isbn}.`;

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="research"
      className="py-24 relative overflow-hidden bg-space-950/40"
      aria-label="Peer-Reviewed Publications and Research"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>SCHOLARLY WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Research &amp;{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Publications.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Peer-reviewed book chapter addressing cyber-threat mitigation, malware detection, and intelligent intrusion identification in IoT ecosystems.
          </p>
        </div>

        {/* Research Paper Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-white/[0.1] hover:border-cyan-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden text-left group">
            {/* Ambient paper glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-500/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                    Book Chapter • Peer Reviewed
                  </span>
                  <div className="text-sm font-mono text-slate-300">
                    {PUBLICATION.publisher} • {PUBLICATION.year}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]">
                  ISBN: {PUBLICATION.isbn}
                </span>
              </div>
            </div>

            {/* Paper Title & Book Details */}
            <div className="py-6 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight group-hover:text-cyan-200 transition-colors">
                &ldquo;{PUBLICATION.title}&rdquo;
              </h3>

              <div className="text-base text-cyan-300 font-medium">
                Published in: <span className="text-white italic">{PUBLICATION.bookTitle}</span> ({PUBLICATION.publisher})
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {PUBLICATION.description}
              </p>
            </div>

            {/* Topics covered */}
            <div className="space-y-2.5 pb-6">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Investigated Research Topics
              </div>
              <div className="flex flex-wrap gap-2">
                {PUBLICATION.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-cyan-500/10 text-cyan-200 border border-cyan-500/20"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="font-mono text-xs text-slate-400">
                Author: Balram Kumar (Co-author)
              </div>

              <button
                onClick={copyCitation}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-white/[0.05] hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-white/[0.1] hover:border-cyan-500/30 transition-all focus:outline-none"
                aria-label="Copy Academic Citation"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Citation Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-cyan-400" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
