export const PROFILE = {
  name: "Vishwajith P",
  title: "AI & Machine Learning Student",
  headline: "Turning Ideas into Intelligent Systems",
  college: "K. Ramakrishnan College of Technology",
  degree: "B.E. in Computer Science and Engineering (Artificial Intelligence and Machine Learning)",
  year: "Third year",
  graduation: "2028",
  cgpa: "7.47 / 10",
  location: "Tiruchirappalli, Tamil Nadu, India",
  intro:
    "I am an AI and Machine Learning student interested in intelligent systems, deep learning, computer vision, data analytics, and AI research. I enjoy exploring emerging technologies and building practical solutions to real-world problems.",
  ctaPrimary: "Explore My Projects",
  ctaSecondary: "View My Skills",
  careerInterests: [
    "AI/ML Engineer",
    "Machine Learning Engineer",
    "AI Research Intern",
    "Data Scientist",
    "Data Analyst",
    "Computer Vision Engineer"
  ],
  priorities: "AI research, business problem-solving, communicating insights, and entry-level opportunities.",
  socials: {
    github: "https://github.com/vishwajith2402",
    linkedin: "https://www.linkedin.com/in/vishwajith-p-69269335a/",
    email: "vishwajith2402@gmail.com"
  }
};

export const SKILLS_DATA = [
  {
    category: "Programming",
    icon: "Code",
    skills: ["Python", "SQL"]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    skills: ["Machine Learning", "Deep Learning", "Data Science"]
  },
  {
    category: "Computer Vision",
    icon: "Eye",
    skills: ["OpenCV", "MediaPipe"]
  },
  {
    category: "Data Analytics",
    icon: "BarChart3",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"]
  },
  {
    category: "Application Development",
    icon: "Layers",
    skills: ["Streamlit"]
  },
  {
    category: "Developer Tools",
    icon: "Terminal",
    skills: ["Git", "GitHub", "VS Code"]
  }
];

export const PROJECTS_DATA = [
  {
    id: "affect-ai",
    title: "AffectAI: Human Emotion Recognition System",
    shortSummary:
      "A computer vision prototype analyzing facial cues and speech modulation for real-time human emotional state identification.",
    status: "Working prototype (approx. 50% implemented)",
    statusBadge: "Prototype (50%)",
    statusColor: "yellow",
    technologies: [
      "Python",
      "CNN",
      "OpenCV",
      "MediaPipe",
      "Digital Signal Processing (DSP)",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    github: "https://github.com/vishwajith2402/AI_based_Emotion_Recognition_System",
    hasLiveDemo: false,
    problemStatement:
      "Conventional interfaces lack empathetic and affective intelligence, rendering human-computer interaction rigid and oblivious to user emotional states during high-stress workflows or digital learning environments.",
    objective:
      "Develop an affective computing prototype capable of interpreting facial landmarks and speech acoustic features to classify primary emotions.",
    architecture:
      "The current architecture leverages OpenCV and MediaPipe for facial feature point extraction and bounding bounding box normalization, feeding normalized tensor matrices into a Convolutional Neural Network (CNN). Speech inputs undergo Digital Signal Processing (DSP) for spectral feature extraction.",
    implementedFeatures: [
      "Real-time video stream ingestion and face mesh tracking via MediaPipe & OpenCV",
      "Convolutional Neural Network (CNN) backbone for spatial facial landmark classification",
      "Digital Signal Processing (DSP) baseline for audio frequency and modulation features",
      "Lightweight responsive frontend web interface displaying visual inference tags"
    ],
    limitations:
      "Currently restricted to controlled lighting environments; multimodal temporal synchronization between simultaneous video and audio channels is currently in active calibration.",
    futureEnhancements: [
      "BiLSTM temporal modeling for continuous speech context",
      "Multimodal late-fusion engine blending facial cues and speech pitch confidence scores",
      "Edge-compute deployment optimization"
    ]
  },
  {
    id: "student-performance-analysis",
    title: "AIML Student Performance Analysis System",
    shortSummary:
      "Interactive data science dashboard and predictive modeling tool evaluating academic factors influencing student pass/fail outcomes.",
    status: "Working prototype",
    statusBadge: "Working Prototype",
    statusColor: "emerald",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Plotly",
      "Matplotlib",
      "Seaborn"
    ],
    github: "https://github.com/vishwajith2402/Student-Pass-Fail-Prediction-using-python",
    hasLiveDemo: false,
    problemStatement:
      "Educational institutions frequently struggle to identify at-risk students ahead of critical evaluation milestones, missing opportunities for timely pedagogical intervention.",
    objective:
      "Perform exploratory data analysis and build predictive machine learning models to forecast academic pass/fail risk based on historical academic metrics.",
    architecture:
      "Built with Python data science libraries. Pandas and NumPy handle imputation, feature scaling, and categorical encoding. Interactive exploratory visualizations are orchestrated through Plotly, Matplotlib, and Seaborn, presented as a reactive Streamlit application.",
    implementedFeatures: [
      "Interactive Streamlit web dashboard for real-time metric filtering",
      "Exploratory Data Analysis (EDA) charts examining correlation matrices and performance distributions",
      "Supervised ML classification pipeline predicting pass/fail probabilities",
      "Interactive multi-parameter simulation sliders for hypothetical grade forecasts"
    ],
    limitations:
      "Trained on structured synthetic and benchmark academic datasets; requires further external institution validation.",
    futureEnhancements: [
      "Integration with automated LMS APIs for live telemetry ingest",
      "SHAP / LIME explainability dashboard to highlight actionable intervention triggers for educators"
    ]
  },
  {
    id: "library-management-system",
    title: "Library Management System with DBMS",
    shortSummary:
      "Robust relational database-driven desktop utility streamlining inventory tracking, catalog search, book checkout workflows, and user auditing.",
    status: "Completed project",
    statusBadge: "Completed",
    statusColor: "cyan",
    technologies: ["Python", "MySQL"],
    github: "https://github.com/vishwajith2402/Library-Management-System-with-influence-of-DBMS",
    hasLiveDemo: false,
    problemStatement:
      "Manual and spreadsheet-based inventory tracking in campus libraries leads to data redundancy, lost lending records, and concurrency conflicts.",
    objective:
      "Engineer a deterministic relational data layer in MySQL paired with an ergonomic Python application to manage complete book lifecycle states.",
    architecture:
      "Normalized MySQL database schema enforcing foreign keys and ACID transactional integrity, connected to a Python business-logic layer handling user transactions, inventory updates, and validation.",
    implementedFeatures: [
      "Normalized relational schema for members, catalogue records, and transaction ledgers",
      "CRUD operations for catalog search, book issuance, return logging, and overdue tracking",
      "Parameterized SQL queries preventing SQL injection vulnerabilities",
      "Fine-grained role separation between administrators and student readers"
    ],
    limitations:
      "Local desktop client architecture without remote web-service cloud hosting.",
    futureEnhancements: [
      "RESTful FastAPI wrapper for multi-client cloud access",
      "Barcode and RFID hardware scanner integration"
    ]
  }
];

export const EXPERIENCE_DATA = [
  {
    role: "AI Intern",
    organization: "Glowlogics Solutions",
    period: "Internship",
    badge: "AI Engineering",
    description:
      "Hands-on immersion in artificial intelligence pipelines, working on machine learning model exploration, data pre-processing, and real-world system problem-solving."
  },
  {
    role: "Power BI Intern",
    organization: "Industry Immersion",
    period: "Internship",
    badge: "Business Intelligence",
    description:
      "Developed interactive business intelligence dashboards, structured data models with DAX computations, and generated actionable visual analytics."
  },
  {
    role: "AICTE Virtual Internship",
    organization: "AICTE (All India Council for Technical Education)",
    period: "Virtual Internship",
    badge: "National Program",
    description:
      "Completed rigorous technical curriculum and project milestones sanctioned under the AICTE technology development initiatives."
  },
  {
    role: "AIML Intern",
    organization: "Internsforge",
    period: "Internship",
    badge: "Machine Learning",
    description:
      "Collaborated on applied machine learning tasks, model benchmarking, exploratory data analytics, and predictive workflows."
  }
];

export const RESEARCH_INTERESTS = [
  {
    title: "Computer Vision",
    description: "Spatial feature extraction, face mesh localization, and edge-optimized visual reasoning.",
    icon: "Eye"
  },
  {
    title: "Deep Learning",
    description: "Neural architectures, convolutional representations, and modern optimization strategies.",
    icon: "Cpu"
  },
  {
    title: "Natural Language Processing (NLP)",
    description: "Semantic understanding, tokenization pipelines, and contextual language modeling.",
    icon: "FileText"
  },
  {
    title: "Multimodal AI",
    description: "Synchronizing heterogeneous signals (visual, audio, and tabular) into coherent representations.",
    icon: "Layers"
  },
  {
    title: "AI for Real-World Problem Solving",
    description: "Translating computational intelligence into robust software addressing practical societal and business hurdles.",
    icon: "Globe"
  },
  {
    title: "Reinforcement Learning",
    description: "Markov decision processes, agent exploration-exploitation policies, and dynamic control.",
    icon: "Compass"
  }
];

export const CERTIFICATIONS_DATA = [
  {
    issuer: "AWS",
    title: "Cloud & Machine Learning Foundations",
    focus: "Cloud compute primitives, cloud AI architectures, scalable storage",
    verified: true
  },
  {
    issuer: "IBM",
    title: "AI & Data Science Curriculum",
    focus: "Methodology, predictive analytics pipelines, cognitive computing basics",
    verified: true
  },
  {
    issuer: "MongoDB",
    title: "NoSQL Database & Document Modeling",
    focus: "CRUD operations, aggregation frameworks, schema flexibility",
    verified: true
  },
  {
    issuer: "Simplilearn",
    title: "Data Science & Machine Learning Masterclass",
    focus: "Statistical foundations, feature engineering, predictive models",
    verified: true
  },
  {
    issuer: "Forage",
    title: "Job Simulation Certificates",
    focus: "Practical enterprise work scenarios, data analytics exercises",
    verified: true
  },
  {
    issuer: "Power BI",
    title: "Business Intelligence & Visualization Training",
    focus: "DAX calculations, interactive reporting, multi-table relationships",
    verified: true
  }
];

export const PERSONAL_INTERESTS = [
  { name: "Exploring AI Tools", icon: "Sparkles", desc: "Experimenting with LLM workflows, autonomous agents, and generative interfaces." },
  { name: "Gaming", icon: "Gamepad2", desc: "Enjoying competitive strategy and immersive world-building titles." },
  { name: "Logical Challenges", icon: "Puzzle", desc: "Solving algorithmic puzzles, discrete math riddles, and optimization problems." },
  { name: "Science & Tech Reading", icon: "BookOpen", desc: "Staying updated on AI research papers, distributed systems, and chip design." },
  { name: "Continuous Learning", icon: "GraduationCap", desc: "Mastering new frameworks, open-source libraries, and computer vision toolkits." }
];

export const ARTICLES_DATA = [
  {
    slug: "building-neural-interfaces-threejs",
    title: "Architecting 3D Neural Visualizations in React Three Fiber",
    summary:
      "A deep dive into node-graph particle generation, synapse curve rendering, and 60fps WebGL optimization techniques in modern web applications.",
    date: "March 2026",
    readTime: "6 min read",
    tags: ["React Three Fiber", "Three.js", "WebGL", "Creative Coding"],
    content: `
# Architecting 3D Neural Visualizations in React Three Fiber

Interactive 3D graphics on the web have transitioned from experimental novelty to mainstream design language. In AI & Machine Learning portfolios, rendering an interactive neural network or digital brain communicates computational depth far more effectively than static 2D illustrations.

## 1. The Mathematical Foundation: Point Distribution

To construct an organic neural brain silhouette without loading a 20MB GLTF asset, mathematical distribution on spherical or dual-hemisphere geometry provides maximum visual impact with negligible file footprint.

Using parametric equations with sinusoidal surface displacement:

\`\`\`javascript
const hemisphere = (i, count, radius) => {
  const phi = Math.acos(-1 + (2 * i) / count);
  const theta = Math.sqrt(count * Math.PI) * phi;
  
  // Displacement for cortical convolutions
  const displace = Math.sin(theta * 3) * Math.cos(phi * 4) * 0.15;
  const r = radius * (1 + displace);
  
  return [
    r * Math.cos(theta) * Math.sin(phi),
    r * Math.sin(theta) * Math.sin(phi),
    r * Math.cos(phi)
  ];
};
\`\`\`

## 2. Synaptic Edges: Dynamic Geometry

Rendering connecting synapses between near-neighbor neurons requires Euclidean distance indexing. By pre-computing a k-nearest neighbor (k-NN) graph on mount:

- Calculate distances between every vertex pair
- Create line segment pairs for points within threshold $\\delta$
- Stream vertices into a single \`THREE.LineSegments\` draw call

\`\`\`javascript
// BufferGeometry batching prevents draw-call starvation
const lineGeometry = new THREE.BufferGeometry();
lineGeometry.setAttribute(
  'position', 
  new THREE.Float32BufferAttribute(connectionPositions, 3)
);
\`\`\`

## 3. Shader Materials & Glow

To achieve the luxury purple-cyan aesthetic specified in our design system:

- Base core: Royal Purple (\`#6D28D9\`)
- Synaptic pulses: Cyan neon (\`#22D3EE\`)
- Additive blending: \`THREE.AdditiveBlending\` with \`depthWrite: false\`

This creates volumetric luminescence without the overhead of heavy post-processing bloom passes, preserving smooth 60fps rendering even on integrated GPUs.
    `
  },
  {
    slug: "computer-vision-affective-computing",
    title: "Bridging Facial Landmarking and Acoustic Modulation in Emotion Detection",
    summary:
      "Lessons learned from engineering AffectAI: balancing MediaPipe mesh extraction latency against CNN feature inference.",
    date: "February 2026",
    readTime: "8 min read",
    tags: ["Computer Vision", "MediaPipe", "CNN", "Deep Learning"],
    content: `
# Bridging Facial Landmarking and Acoustic Modulation in Emotion Detection

Human emotion is intrinsically multimodal. Facial expressions deliver instantaneous spatial cues, while speech pitch and tone deliver temporal nuance. Engineering **AffectAI** presented key architectural challenges in balancing inference throughput.

## 1. Landmark Isolation vs. Raw Pixel Convolutions

Traditional emotion recognition trains deep CNNs directly on grayscale facial bounding boxes ($48 \\times 48$ FER-2013). However:

- Pixel-based models suffer under varied ambient illumination
- Subject pose orientation creates catastrophic feature variance

By leveraging **MediaPipe Face Mesh**, we extract 468 3D facial landmarks in real-time. Instead of learning raw pixel textures, the model computes normalized geometric euclidean ratios (e.g. eye aspect ratio, lip curvature, eyebrow displacement).

\`\`\`python
# Geometric displacement ratio calculation
def compute_affect_vectors(landmarks):
    lip_corner_dist = euclidean(landmarks[61], landmarks[291])
    brow_arch = euclidean(landmarks[70], landmarks[107])
    return [lip_corner_dist, brow_arch]
\`\`\`

## 2. The Acoustic Frontier: DSP Feature Extraction

Speech modulation cannot rely purely on volume. We compute Mel-Frequency Cepstral Coefficients (MFCCs) and spectral roll-off using short-time Fourier transforms (STFT):

1. **Windowing:** 25ms Hamming window with 10ms hop length
2. **Filterbank:** Triangular bandpass filters along the non-linear Mel scale
3. **Log Energy & DCT:** Decoupling formant frequencies from vocal tract resonance

## 3. Future Roadmap: Multimodal Fusion

The ongoing work focuses on late fusion: passing the vision logits and audio spectral vectors through attention-weighted gating before final emotion classification.
    `
  }
];
