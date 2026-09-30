import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balram Kumar | Data Scientist | Generative AI & LLM Engineer",
  description:
    "Portfolio of Balram Kumar — Data Scientist and Generative AI & LLM Engineer building production ML, RAG, NLP, conversational AI, and cloud-based systems.",
  keywords: [
    "Balram Kumar",
    "Data Scientist",
    "Generative AI Engineer",
    "LLM Engineer",
    "AI/ML Engineer",
    "Forward Deployed Engineer",
    "RAG",
    "Conversational AI",
    "Pipecat",
    "FAISS",
    "TensorFlow",
    "Machine Learning",
  ],
  authors: [{ name: "Balram Kumar", url: "https://github.com/BK18ROY" }],
  creator: "Balram Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balramkumar.dev",
    title: "Balram Kumar | Data Scientist | Generative AI & LLM Engineer",
    description:
      "Data Scientist with 2+ years of experience building and shipping production ML, NLP, and Generative AI systems.",
    siteName: "Balram Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Balram Kumar | Data Scientist | Generative AI & LLM Engineer",
    description:
      "Building intelligent systems that move from prototype to production.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-space-900 text-slate-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen relative">
        {/* Ambient background glows */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse-slow" />
          <div className="absolute top-[35%] right-[-10%] w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[160px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] animate-pulse-slow" />
          <div className="absolute inset-0 tech-grid opacity-30" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
