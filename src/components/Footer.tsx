import React from "react";
import { Download, Mail } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-space-950 py-12 relative z-20 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-300">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-wider uppercase">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-xs font-mono text-cyan-400">
                {PERSONAL_INFO.headline}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="/resume.pdf"
              download="Balram_Kumar_Resume.pdf"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-cyan-400 font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom copyright & note */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with Next.js, TypeScript &amp; Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
