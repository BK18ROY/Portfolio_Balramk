import React from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import { EDUCATION } from "@/data/portfolioData";

export default function Education() {
  return (
    <section className="py-20 relative overflow-hidden" aria-label="Education Background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Credentials.
            </span>
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl">
          <div className="p-7 sm:p-8 rounded-2xl glass-panel border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 text-left space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {EDUCATION.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs sm:text-sm text-cyan-300 font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{EDUCATION.institution}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{EDUCATION.period}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                  <Award className="w-3.5 h-3.5" />
                  <span>GPA: {EDUCATION.gpa}</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {EDUCATION.details}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
