"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Mic,
  Search,
  ScanFace,
  CheckCircle2,
} from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeVoiceStep, setActiveVoiceStep] = useState<number>(0);
  const [activeRagStep, setActiveRagStep] = useState<number>(0);

  useEffect(() => {
    const voiceInterval = setInterval(() => {
      setActiveVoiceStep((prev) => (prev + 1) % 7);
    }, 1800);

    const ragInterval = setInterval(() => {
      setActiveRagStep((prev) => (prev + 1) % 7);
    }, 2000);

    return () => {
      clearInterval(voiceInterval);
      clearInterval(ragInterval);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
      aria-label="Selected Technical Projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Selected{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Work.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-base sm:text-lg">
            Production-grade systems engineered for high throughput, sub-2-second conversational latency, and local knowledge retrieval.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          
          {/* PROJECT 1: AI VOICE BOT */}
          <div className="rounded-2xl glass-panel border border-white/[0.1] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                    Real-Time Conversational AI
                  </span>
                  <span className="px-3 py-1 text-xs font-mono text-emerald-300 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    Verified Sub-2s Latency
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                    AI Voice Bot / Conversational AI Platform
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Pipecat • Gemini 2.5 Flash • DeepSpeech • Cartesia TTS
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Built a real-time Generative AI voice assistant achieving sub-2-second end-to-end latency across product, finance, roadside assistance, and dealer-support workflows.
                </p>

                {/* Key architectural highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Core Technical Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>VAD &amp; Instant Barge-In</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Hindi/Hinglish Code-Switch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Failure Recovery &amp; State</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span>Sub-2s Real-Time Latency</span>
                    </div>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python", "Pipecat", "Gemini 2.5 Flash", "DeepSpeech", "Cartesia TTS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Button to open detail modal */}
                <div className="pt-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[0])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Inspect System Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Animated Voice Pipeline Visualization */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-space-950/80 border border-white/[0.1] p-5 sm:p-6 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
                    <span className="text-cyan-400 flex items-center gap-1.5">
                      <Mic className="w-4 h-4 animate-pulse" />
                      LIVE AUDIO PIPELINE
                    </span>
                    <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      LATENCY &lt; 2.0s
                    </span>
                  </div>

                  {/* Architecture Diagram with active pulses */}
                  <div className="space-y-2 pt-1 font-mono text-[11px]">
                    {[
                      { step: "USER VOICE", desc: "WebSocket Audio Frame Capture", color: "text-cyan-300" },
                      { step: "VAD", desc: "Speech Boundary & Barge-In Cutoff", color: "text-blue-300" },
                      { step: "SPEECH RECOGNITION", desc: "DeepSpeech Streaming STT", color: "text-indigo-300" },
                      { step: "LLM", desc: "Gemini 2.5 Flash Token Streaming", color: "text-violet-300" },
                      { step: "RESPONSE", desc: "Multilingual Code-Switch Filter", color: "text-pink-300" },
                      { step: "TTS", desc: "Cartesia Ultra-Fast Audio Synth", color: "text-amber-300" },
                      { step: "USER", desc: "Live Audio Playback Stream", color: "text-emerald-300" },
                    ].map((item, idx) => {
                      const isActive = activeVoiceStep === idx;
                      return (
                        <div
                          key={item.step}
                          className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-cyan-500/15 border border-cyan-500/40 shadow-sm"
                              : "bg-white/[0.01] border border-white/[0.04] opacity-75"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isActive ? "bg-cyan-400 animate-ping" : "bg-slate-600"
                              }`}
                            />
                            <span className={`font-bold ${item.color}`}>{item.step}</span>
                          </div>
                          <span className="text-slate-400 text-[10px] hidden sm:inline">
                            {item.desc}
                          </span>
                          {isActive && (
                            <span className="text-[9px] text-cyan-300 bg-cyan-950 px-1.5 py-0.5 rounded">
                              STREAMING
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                    <span>Protocol: Asynchronous Event-Loop</span>
                    <span>Framework: Pipecat Engine</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 2: CONTEXT-AWARE RETRIEVAL ENGINE (SEMANTIC RAG) */}
          <div className="rounded-2xl glass-panel border border-white/[0.1] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30">
                    Semantic RAG &amp; Vector Search
                  </span>
                  <span className="px-3 py-1 text-xs font-mono text-cyan-300 rounded-full bg-cyan-500/10 border border-cyan-500/30">
                    FAISS Dense Indexing
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-blue-200 transition-colors">
                    Context-Aware Retrieval Engine
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-1">
                    Semantic RAG • FAISS • Sentence-Transformers • LangChain
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Developed a local Retrieval-Augmented Generation (RAG) system for technical knowledge search, featuring document chunking, sentence embeddings, FAISS vector search, and query expansion; benchmarked raw vs. AI-enhanced retrieval using cosine similarity.
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Engineering Characteristics
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>Semantic Chunk Boundary Logic</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>Sentence-Transformers Embeddings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>FAISS Vector Indexing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>Cosine Similarity Benchmarking</span>
                    </div>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python", "FAISS", "Sentence-Transformers", "LangChain-style RAG", "Cosine Similarity"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[1])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Inspect RAG Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Animated Vector Search / RAG Visualization */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-space-950/80 border border-white/[0.1] p-5 sm:p-6 space-y-4 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
                    <span className="text-blue-400 flex items-center gap-1.5">
                      <Search className="w-4 h-4 animate-spin-slow" />
                      VECTOR RETRIEVAL RUNTIME
                    </span>
                    <span className="text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/40">
                      FAISS INDEX ACTIVE
                    </span>
                  </div>

                  {/* Visualized Architecture Pipeline */}
                  <div className="space-y-2 pt-1 font-mono text-[11px]">
                    {[
                      { step: "DOCUMENTS", desc: "Raw Technical Ingestion", color: "text-slate-200" },
                      { step: "CHUNKING", desc: "Context-Boundary Semantic Split", color: "text-cyan-300" },
                      { step: "SENTENCE EMBEDDINGS", desc: "Dense Vectors (768-dim)", color: "text-blue-300" },
                      { step: "FAISS VECTOR SEARCH", desc: "IndexFlatIP / IndexIVFFlat", color: "text-indigo-300" },
                      { step: "QUERY EXPANSION", desc: "Multi-Hop Synonym Enrichment", color: "text-violet-300" },
                      { step: "RELEVANT CONTEXT", desc: "Cosine Sim Re-Ranking (Top-k)", color: "text-emerald-300" },
                      { step: "AI RESPONSE", desc: "Grounded LLM Synthesis", color: "text-pink-300" },
                    ].map((item, idx) => {
                      const isActive = activeRagStep === idx;
                      return (
                        <div
                          key={item.step}
                          className={`flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                            isActive
                              ? "bg-blue-500/15 border border-blue-500/40 shadow-sm"
                              : "bg-white/[0.01] border border-white/[0.04] opacity-75"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2 h-2 rounded-full ${
                                isActive ? "bg-blue-400 animate-ping" : "bg-slate-600"
                              }`}
                            />
                            <span className={`font-bold ${item.color}`}>{item.step}</span>
                          </div>
                          <span className="text-slate-400 text-[10px] hidden sm:inline">
                            {item.desc}
                          </span>
                          {isActive && (
                            <span className="text-[9px] text-blue-300 bg-blue-950 px-1.5 py-0.5 rounded">
                              INDEXED
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-[10px] font-mono text-slate-400">
                    <span>Similarity Metric: Cosine Distance</span>
                    <span className="text-cyan-400">Zero Data Leakage Local Stack</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* PROJECT 3: FACE MASK DETECTION SYSTEM */}
          <div className="rounded-2xl glass-panel border border-white/[0.1] hover:border-cyan-500/40 transition-all duration-300 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10 relative group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/30">
                    Computer Vision &amp; Deep Learning
                  </span>
                  <span className="px-3 py-1 text-xs font-mono text-emerald-300 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                    Edge Real-Time Inference
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-violet-200 transition-colors">
                    Face Mask Detection System
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Python • OpenCV • TensorFlow • Keras • CNN
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Built a real-time face mask detection system using a custom CNN model and OpenCV to analyze live video streams, enabling automated compliance alerts and monitoring in public environments.
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Architecture Highlights
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                      <span>Custom Deep CNN Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                      <span>OpenCV Live Video Stream Capture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                      <span>Real-Time Compliance Alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                      <span>Public Monitoring Integration</span>
                    </div>
                  </div>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["Python", "OpenCV", "TensorFlow", "Keras", "CNN", "Data Augmentation"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => setSelectedProject(PROJECTS[2])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    <span>Inspect Vision System</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Simulated Computer Vision Feed */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-space-950 border border-white/[0.1] p-5 sm:p-6 space-y-4 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-xs font-mono">
                    <span className="text-violet-400 flex items-center gap-1.5">
                      <ScanFace className="w-4 h-4" />
                      OPENCV LIVE HUD FEED
                    </span>
                    <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                      LIVE INFERENCE
                    </span>
                  </div>

                  {/* Simulated Camera Viewfinder */}
                  <div className="relative h-60 w-full rounded-lg bg-slate-950 border border-cyan-500/30 flex items-center justify-center overflow-hidden">
                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-16 w-full animate-float pointer-events-none" />

                    {/* Viewfinder corner brackets */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
                    <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-400" />

                    {/* Target Bounding Box */}
                    <div className="relative w-36 h-44 rounded-md border-2 border-emerald-400/90 bg-emerald-500/5 flex flex-col justify-between p-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold bg-emerald-500 text-slate-950 px-1 py-0.2 rounded">
                          MASK DETECTED
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>

                      {/* Face Landmark Simulated Points */}
                      <div className="flex justify-center items-center gap-4 py-6 opacity-60">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      </div>

                      <div className="font-mono text-[9px] text-emerald-300 bg-space-950/80 px-1 py-0.5 rounded border border-emerald-500/30 flex justify-between">
                        <span>CONFIDENCE</span>
                        <span className="font-bold text-white">HIGH</span>
                      </div>
                    </div>

                    {/* Top overlay telemetry */}
                    <div className="absolute top-3 left-10 font-mono text-[10px] text-cyan-300">
                      FPS: 30.0 • RES: 1080P
                    </div>
                  </div>

                  {/* Architecture Sequence */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.05]">
                    <span className="text-cyan-400 font-bold">CAMERA</span>
                    <span>→</span>
                    <span className="text-blue-400 font-bold">OPENCV</span>
                    <span>→</span>
                    <span className="text-violet-400 font-bold">CNN</span>
                    <span>→</span>
                    <span className="text-emerald-400 font-bold">DETECTION</span>
                    <span>→</span>
                    <span className="text-rose-400 font-bold">ALERT</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
