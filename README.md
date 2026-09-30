# Balram Kumar — Production AI & ML Engineering Portfolio

A personal portfolio built for **Balram Kumar**, Data Scientist | Generative AI & LLM Engineer | AI/ML | Forward Deployed Engineer.

Designed specifically for HR recruiters, technical recruiters, AI/ML hiring managers, CTOs, and startup founders.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Components & Client Islands)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom futuristic dark theme & Glassmorphism)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Animation & Transitions**: CSS Keyframes + Interactive State Transitions
- **Deployment**: Node.js v20.18+ / Vercel ready

---

## 📁 Project Architecture

```text
portfolio-app/
├── public/
│   ├── resume.pdf          # Authoritative uploaded resume PDF (189 KB)
│   └── images/             # Static visual assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Dark mode palette, glassmorphism, tech grid & glow utilities
│   │   ├── layout.tsx      # SEO metadata, OpenGraph, theme colors, ambient glows
│   │   └── page.tsx        # Composed main page
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky blur header with active section spy & mobile drawer
│   │   ├── Hero.tsx            # Headline, credibility bullets & animated AI pipeline
│   │   ├── CredibilityStrip.tsx# High-impact verified metrics strip
│   │   ├── About.tsx           # Two-column layout with capability cards
│   │   ├── Experience.tsx      # Vertical timeline with expandable details
│   │   ├── Projects.tsx        # Selected work with animated audio/vector/vision pipelines
│   │   ├── ProjectModal.tsx    # Technical deep-dive modal (Overview, Problem, Tech, etc.)
│   │   ├── Skills.tsx          # Filterable skills categories with no fake bars
│   │   ├── Innovation.tsx      # 3 Issued patents with application numbers & dates
│   │   ├── Research.tsx        # CRC Press 2024 book chapter & copyable citation
│   │   ├── Education.tsx       # B.Tech ECE, Chandigarh Engineering College (GPA: 8.29)
│   │   ├── CoreStrengths.tsx   # 5 Interactive forward-deployed capability cards
│   │   ├── Contact.tsx         # Working mailto, tel, copy triggers, LinkedIn & GitHub
│   │   ├── Footer.tsx          # Links, copyright, and resume download
│   │   └── Icons.tsx           # SVG components for LinkedIn and GitHub
│   ├── data/
│   │   └── portfolioData.ts    # Authoritative data extracted directly from resume
│   └── lib/
│       └── utils.ts            # Class merging utility (clsx + tailwind-merge)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```

---

## 🔒 Source of Truth & Authenticity

All personal data, job titles, companies, patent application numbers, publication details, and academic metrics are strictly synchronized with the authoritative resume:
- **Email**: `balramroy503@gmail.com`
- **Phone**: `+91-9592950609`
- **LinkedIn**: [balram-kumar-a73207227](https://www.linkedin.com/in/balram-kumar-a73207227/)
- **GitHub**: [BK18ROY](https://github.com/BK18ROY)
- **Patents**: 202311038646, 202311038655, 202311077323 (Issued May 6, 2023)
- **Publication**: Secure Communication in IoT (CRC Press, 2024) — ISBN: 9781003477327
- **Education**: B.Tech ECE, Chandigarh Engineering College (GPA: 8.29 / 10)
