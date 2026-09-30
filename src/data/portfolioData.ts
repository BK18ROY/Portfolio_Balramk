export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  techStack: string[];
  architectureSteps: string[];
  highlights: string[];
  overview: string;
  problem: string;
  approach: string;
  architectureDetails: string;
  engineeringDetails: string[];
  outcome: string;
  category: "Generative AI" | "Retrieval-Augmented Generation" | "Computer Vision";
  badge: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  current: boolean;
  responsibilities: string[];
  technologies: string[];
}

export interface Patent {
  id: string;
  title: string;
  applicationNo: string;
  issueDate: string;
  description: string;
  highlights: string[];
  hardwareOrTech: string[];
}

export interface Publication {
  title: string;
  bookTitle: string;
  publisher: string;
  year: string;
  isbn: string;
  description: string;
  topics: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  details: string;
}

export const PERSONAL_INFO = {
  name: "Balram Kumar",
  initials: "BK",
  headline: "Data Scientist | Generative AI & LLM Engineer | AI/ML | Forward Deployed Engineer",
  email: "balramroy503@gmail.com",
  phone: "+91-9592950609",
  phoneDisplay: "+91-9592950609",
  linkedIn: "https://www.linkedin.com/in/balram-kumar-a73207227/",
  github: "https://github.com/BK18ROY",
  resumePath: "/resume.pdf",
  location: "Chandigarh / Remote / Relocation Open",
  summary:
    "Data Scientist with 2+ years of experience building and shipping production ML, NLP, and Generative AI systems — including LLM-based RAG pipelines, fine-tuned language models, and real-time conversational AI. Currently working as a Junior Data Scientist, partnering directly with product and engineering teams to translate business problems into deployed AI solutions, in the style of a Forward Deployed Engineer. Proficient across the full ML lifecycle — data engineering, model development, evaluation, and cloud deployment (AWS, GCP, Azure) — with strong Python, SQL, and system-design skills. Co-inventor on 3 patents and co-author of a published book chapter on IoT security.",
};

export const CREDIBILITY_METRICS = [
  { label: "Experience", value: "2+ Years", detail: "Building & shipping production ML/AI" },
  { label: "Patents", value: "3 Patents", detail: "Co-inventor on assistive & sensing devices" },
  { label: "Publication", value: "Published Research", detail: "CRC Press 2024 IoT Security Chapter" },
  { label: "Deployment", value: "Production AI", detail: "Real-time voice bots & local RAG engines" },
  { label: "Core Stack", value: "ML + GenAI + Cloud", detail: "AWS, Azure, Vertex AI, Python & Docker" },
];

export const CAPABILITIES = [
  {
    title: "Generative AI & LLM Engineering",
    description: "Designing real-time voice agents, LLM fine-tuning, prompt orchestration, and robust failure recovery systems.",
    icon: "Cpu",
    tags: ["LLMs", "Pipecat", "Gemini 2.5 Flash", "Fine-Tuning", "VAD"],
  },
  {
    title: "Semantic RAG & Vector Search",
    description: "Architecting context-aware retrieval engines with document chunking, dense embeddings, FAISS indexing, and query expansion.",
    icon: "Database",
    tags: ["FAISS", "Sentence-Transformers", "Cosine Similarity", "RAG Pipelines"],
  },
  {
    title: "Machine Learning & Computer Vision",
    description: "Developing custom CNNs, predictive analytics pipelines, feature engineering, and real-time video stream inference.",
    icon: "Network",
    tags: ["TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "CNN"],
  },
  {
    title: "Forward Deployed & Cloud Delivery",
    description: "Translating business domain challenges into resilient production systems deployed across AWS, Azure, and Google Vertex AI.",
    icon: "Cloud",
    tags: ["AWS", "Azure", "Vertex AI", "Docker", "CI/CD", "REST APIs"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "odio",
    role: "Junior Data Scientist",
    company: "ODIO",
    period: "Jan 2026 – Present",
    current: true,
    responsibilities: [
      "Design and deploy machine learning and Generative AI models to power data-driven product features, owning solutions from prototype through production.",
      "Analyze complex, large-scale datasets to extract actionable insights that guide business and engineering decisions.",
      "Work directly with cross-functional and client teams to scope requirements and deliver scalable AI/ML solutions on AWS and Azure.",
    ],
    technologies: ["Generative AI", "Machine Learning", "AWS", "Azure", "Python", "System Design"],
  },
  {
    id: "frookoon",
    role: "SDE1 (Software Development Engineer I)",
    company: "Frookoon Private Limited",
    period: "Jan 2024 – Dec 2025",
    current: false,
    responsibilities: [
      "Developed and maintained scalable backend software, improving performance and reliability across core services.",
      "Debugged production issues and collaborated with the engineering team on system architecture decisions.",
      "Applied AI, ML, and cloud technologies to improve efficiency and drive product innovation.",
    ],
    technologies: ["Backend Engineering", "AI/ML Integration", "Cloud Systems", "Microservices", "Python"],
  },
  {
    id: "tcil",
    role: "AI/ML Intern",
    company: "TCIL-IT",
    period: "Jul 2022 – Sep 2022",
    current: false,
    responsibilities: [
      "Built and optimized machine learning models and data preprocessing workflows for predictive analytics projects.",
      "Gained hands-on experience in data analysis, Python-based model development, and data visualization techniques.",
    ],
    technologies: ["Python", "Scikit-learn", "Data Preprocessing", "Predictive Analytics", "Data Visualization"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-voice-bot",
    title: "AI Voice Bot / Conversational AI Platform",
    subtitle: "Real-Time Conversational AI Assistant",
    category: "Generative AI",
    badge: "Sub-2s Real-Time Pipeline",
    shortDescription:
      "Built a real-time Generative AI voice assistant achieving sub-2-second end-to-end latency across product, finance, roadside assistance, and dealer-support workflows.",
    techStack: ["Python", "Pipecat", "Gemini 2.5 Flash", "DeepSpeech", "Cartesia TTS"],
    architectureSteps: [
      "USER VOICE",
      "VAD",
      "SPEECH RECOGNITION",
      "LLM",
      "RESPONSE",
      "TTS",
      "USER",
    ],
    highlights: [
      "Sub-2-second end-to-end conversational latency",
      "Voice Activity Detection (VAD) with instant barge-in support",
      "Dynamic Hindi/Hinglish to English code-switching",
      "Graceful failure recovery and session resumption",
      "Automated workflows across product, finance, roadside assistance, and dealer support",
    ],
    overview:
      "A production-ready voice conversational platform engineered for ultra-low latency real-time voice interactions. Designed to handle multimodal voice input, real-time interruptions, and seamless multilingual code-switching.",
    problem:
      "Traditional conversational systems suffer from latency exceeding 3-4 seconds, fragile interruption handling when the caller talks over the bot, and inability to handle natural code-switching in bilingual environments like Hindi/Hinglish.",
    approach:
      "Engineered an event-driven audio pipeline powered by Pipecat, incorporating hardware/software Voice Activity Detection (VAD) to immediately pause speech generation on user barge-in, streaming DeepSpeech transcripts into Gemini 2.5 Flash, and streaming synthesized audio out via Cartesia TTS.",
    architectureDetails:
      "User Voice is captured via real-time WebSocket audio streaming → VAD detects speech boundary frames → DeepSpeech performs streaming STT → Gemini 2.5 Flash generates contextual tokens → Streaming output is piped to Cartesia TTS → Audio buffers stream back to user seamlessly.",
    engineeringDetails: [
      "Integrated Pipecat framework for asynchronous audio frame management and pipeline orchestration.",
      "Implemented strict barge-in interrupts to cut off TTS audio playback within 120ms of detected human speech.",
      "Tuned prompt system and temperature for Gemini 2.5 Flash to ensure rapid response synthesis under tight constraints.",
      "Created multilingual token handling to reliably preserve conversational context across Hindi, Hinglish, and English transitions.",
      "Engineered fallback retry handlers with mock-grace state persistence to recover from socket drops without conversational restart.",
    ],
    outcome:
      "Delivered a responsive conversational voice platform achieving verified sub-2-second end-to-end voice latency across high-stakes domains including roadside assistance and financial inquiries.",
  },
  {
    id: "rag-engine",
    title: "Context-Aware Retrieval Engine",
    subtitle: "Semantic RAG Architecture",
    category: "Retrieval-Augmented Generation",
    badge: "Benchmarked Vector Search",
    shortDescription:
      "Developed a local Retrieval-Augmented Generation (RAG) system for technical knowledge search, featuring document chunking, sentence embeddings, FAISS vector search, and query expansion.",
    techStack: ["Python", "FAISS", "Sentence-Transformers", "LangChain-style RAG"],
    architectureSteps: [
      "DOCUMENTS",
      "CHUNKING",
      "SENTENCE EMBEDDINGS",
      "FAISS VECTOR SEARCH",
      "QUERY EXPANSION",
      "RELEVANT CONTEXT",
      "AI RESPONSE",
    ],
    highlights: [
      "Semantic chunking preserving technical context boundaries",
      "High-dimensional dense vector embeddings with Sentence-Transformers",
      "Sub-millisecond FAISS vector indexing and similarity search",
      "Automated query expansion for ambiguous technical queries",
      "Benchmarked raw vs. AI-enhanced retrieval using cosine similarity",
    ],
    overview:
      "A high-precision local RAG platform tailored for complex technical documentation, optimizing both recall and precision through semantic vector search and query expansion.",
    problem:
      "Standard keyword search fails on complex technical corpora, while naive RAG pipelines suffer from context dilution, poor chunk boundary semantics, and vocabulary mismatch on domain-specific user queries.",
    approach:
      "Implemented recursive semantic document chunking, converted text segments into dense vector embeddings using Sentence-Transformers, indexed them into FAISS, and enriched user queries with algorithmic expansion before cosine similarity reranking.",
    architectureDetails:
      "Technical manuals & documents are ingested → Recursive semantic chunker splits text with overlap → Sentence-Transformers computes dense vectors → Vectors indexed in FAISS index → Incoming query undergoes query expansion → Top-k context matches retrieved via cosine similarity → Augmented prompt assembled for AI response generation.",
    engineeringDetails: [
      "Benchmarked raw lexical retrieval vs. dense AI-enhanced semantic retrieval using cosine similarity metrics.",
      "Utilized FAISS IndexFlatIP / IndexIVFFlat for scalable vector similarity indexing.",
      "Engineered multi-hop query expansion to bridge vocabulary gaps in specialized technical terminology.",
      "Optimized chunk size and sliding overlap windows to maximize semantic context retention without token bloat.",
      "Structured local retrieval pipeline to operate with zero external data leakage.",
    ],
    outcome:
      "Significantly elevated retrieval relevance and precision over standard document search, verified via rigorous cosine similarity benchmarking.",
  },
  {
    id: "mask-detection",
    title: "Face Mask Detection System",
    subtitle: "Computer Vision & Deep Learning",
    category: "Computer Vision",
    badge: "Real-Time Video Stream Inference",
    shortDescription:
      "Built a real-time face mask detection system using a custom CNN model and OpenCV to analyze live video streams, enabling automated compliance alerts and monitoring in public environments.",
    techStack: ["Python", "OpenCV", "TensorFlow", "Keras", "CNN"],
    architectureSteps: [
      "CAMERA",
      "OPENCV",
      "CNN",
      "DETECTION",
      "ALERT",
    ],
    highlights: [
      "Custom Convolutional Neural Network (CNN) architecture",
      "Real-time video stream ingestion and pre-processing via OpenCV",
      "Bounding-box face localization and mask classification",
      "Automated compliance alert triggers for public health environments",
    ],
    overview:
      "An end-to-end edge-friendly computer vision pipeline for real-time video stream classification, detecting mask adherence in dynamic lighting conditions and crowded spaces.",
    problem:
      "Monitoring public health compliance manually in high-traffic public facilities is inefficient and error-prone, requiring an automated edge vision solution.",
    approach:
      "Designed and trained a custom Convolutional Neural Network on labeled face datasets with and without masks, combining it with OpenCV face detection classifiers to extract facial regions and perform rapid inference on live video frames.",
    architectureDetails:
      "Live Camera input → OpenCV video frame capture and grayscale/color normalization → Face region localization → Scaled facial ROI passed to custom CNN → Binary/multiclass classification (Mask / No Mask) → Visual bounding box with compliance alert overlay.",
    engineeringDetails: [
      "Engineered data augmentation pipeline (rotation, zoom, horizontal flip) in Keras to prevent overfitting under variable lighting.",
      "Optimized CNN layer topology with Conv2D, MaxPooling2D, Dropout, and BatchNormalization to maintain high frames-per-second (FPS) on consumer hardware.",
      "Integrated OpenCV video stream threading to ensure non-blocking frame capture during neural inference.",
      "Implemented threshold-based alert triggers to minimize false positives caused by partial facial occlusions.",
    ],
    outcome:
      "Built a robust, real-time automated monitoring and compliance alert system operating seamlessly on live camera streams.",
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Programming & Data",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    skills: ["Python", "SQL", "C++", "Java", "Pandas", "NumPy", "MongoDB"],
  },
  {
    name: "Machine Learning",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-400",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "Feature Engineering",
      "Model Evaluation",
      "Statistical Analysis",
    ],
  },
  {
    name: "Generative AI & NLP",
    color: "from-purple-500/20 to-cyan-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-400",
    skills: [
      "LLMs",
      "RAG",
      "LLM Fine-Tuning",
      "Prompt Engineering",
      "Transformers",
      "Semantic Search",
      "NLTK",
      "spaCy",
    ],
  },
  {
    name: "Data Engineering",
    color: "from-emerald-500/20 to-cyan-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    skills: [
      "PostgreSQL",
      "MySQL",
      "RabbitMQ",
      "Data Preprocessing",
      "ETL Pipelines",
      "Data Validation",
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "from-indigo-500/20 to-violet-500/20",
    borderColor: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    skills: [
      "AWS",
      "Google Vertex AI",
      "Azure",
      "Docker",
      "CI/CD",
      "Flask",
      "Django",
      "Linux",
    ],
  },
  {
    name: "Development",
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    iconColor: "text-violet-400",
    skills: ["Node.js", "REST APIs", "Bash", "Git"],
  },
];

export const PATENTS: Patent[] = [
  {
    id: "sleep-paralysis",
    title: "Sleep Paralysis Detection and Prevention System",
    applicationNo: "202311038646",
    issueDate: "May 6, 2023",
    description:
      "Wearable sensor-based device using accelerometer motion detection and an ARM-based controller to safely alert individuals during sleep paralysis episodes.",
    highlights: [
      "Wearable sensor-based biometric monitoring",
      "Accelerometer micro-motion & tremor detection",
      "ARM-based embedded controller architecture",
      "Safe, calibrated bio-stimulation awakening alert",
    ],
    hardwareOrTech: ["ARM Controller", "Accelerometer Sensors", "Embedded Firmware", "Signal Processing"],
  },
  {
    id: "toddler-feeding",
    title: "Feeding Assistive Device for Toddlers",
    applicationNo: "202311038655",
    issueDate: "May 6, 2023",
    description:
      "AI-powered assistive device using an imaging system and robotic arm for automated, accurate toddler feeding, with motion, weight, and moisture sensors.",
    highlights: [
      "AI-powered computer vision imaging system",
      "Multi-axis robotic arm positioning",
      "Integrated motion, weight, and moisture sensory feedback",
      "Real-time adaptive pacing for infant safety",
    ],
    hardwareOrTech: ["Vision System", "Robotic Arm", "Weight Sensors", "Moisture Sensing", "AI Edge Compute"],
  },
  {
    id: "hygiene-device",
    title: "Hygiene Maintenance Device",
    applicationNo: "202311077323",
    issueDate: "May 6, 2023",
    description:
      "AI-powered assistive device integrating motion, weight, and moisture sensors to monitor hygiene needs and alert caregivers.",
    highlights: [
      "Continuous sensory monitoring for patient care",
      "Multi-modal sensor integration (motion, weight, moisture)",
      "Automated caregiver telemetry alerts",
      "Sanitation condition threshold evaluation",
    ],
    hardwareOrTech: ["Multi-Sensor Array", "Telemetry Triggers", "Edge Sensor Hub", "Real-Time Alerts"],
  },
];

export const PUBLICATION: Publication = {
  title: "Intrusion and Malware Detection in IoT",
  bookTitle: "Secure Communication in IoT",
  publisher: "CRC Press",
  year: "2024",
  isbn: "9781003477327",
  description:
    "Co-authored book chapter covering emerging technologies, challenges, and mitigation strategies in IoT security, focusing on intelligent intrusion detection systems and malware classification mechanisms across interconnected embedded devices.",
  topics: [
    "IoT Security & Threat Vectors",
    "Intrusion Detection Mechanisms",
    "Malware Classification in Embedded Networks",
    "Emerging Mitigation Architectures",
  ],
};

export const EDUCATION: Education = {
  degree: "Bachelor of Technology, Electronics and Communication Engineering",
  institution: "Chandigarh Engineering College, Chandigarh, India",
  period: "Oct 2020 – Jun 2024",
  gpa: "8.29 / 10",
  details:
    "Strong foundation in digital signal processing, embedded systems, microprocessors, applied mathematics, and computational engineering.",
};

export const CORE_STRENGTHS = [
  {
    title: "Client-Facing Delivery",
    subtitle: "Forward Deployed Mindset",
    description:
      "Translating ambiguous customer requirements into concrete technical architectures, scoping deliverables, and shipping production-grade AI solutions.",
    icon: "Briefcase",
  },
  {
    title: "Problem Solving",
    subtitle: "First-Principles Approach",
    description:
      "Deconstructing complex machine learning, latency, and data bottlenecks to engineer scalable, cost-efficient algorithmic interventions.",
    icon: "Lightbulb",
  },
  {
    title: "Analytical Thinking",
    subtitle: "Data-Driven Rigor",
    description:
      "Analyzing large-scale datasets, establishing quantitative evaluation metrics (such as cosine similarity benchmarking), and validating model efficacy.",
    icon: "BarChart3",
  },
  {
    title: "Communication",
    subtitle: "Technical & Executive Clarity",
    description:
      "Articulating sophisticated AI/ML architectures clearly to cross-functional engineering teams, product stakeholders, and executive leadership.",
    icon: "MessageSquare",
  },
  {
    title: "Leadership & Initiative",
    subtitle: "Ownership from Zero to One",
    description:
      "Spearheading end-to-end AI initiatives, co-inventing patented IoT technologies, and authoring peer-reviewed academic literature.",
    icon: "ShieldCheck",
  },
];
