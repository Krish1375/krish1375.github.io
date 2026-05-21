import type {
  Counters,
  EditorialLine,
  JourneyStep,
  Meta,
  NavLink,
  Project,
  RadarSkill,
  SkillBar,
  TerminalLine,
} from "./types";

export const meta: Meta = {
  name: "Krish Shah",
  title: "Data Scientist · AI Engineer · ML Engineer",
  tagline: "I don't just build models.",
  taglineEmphasis: "I ship them.",
  subline: "Agentic AI · MLOps · Computer Vision · Data Engineering",
  available: true,
  email: "krishshah1375@gmail.com",
  github: "https://github.com/Krish1375",
  linkedin: "https://www.linkedin.com/in/krishshah10/",
  scholar: "https://doi.org/10.1007/s11042-025-20751-z",

};

export const navLinks: NavLink[] = [
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const counters: Counters = {
  inferenceRatePerSecond: 2.7,
  productionModels: 5,
  productionModelsNote: "across Amazon, industry & research",
  publications: 1,
  publicationsNote: "Springer · Multimedia Tools and Applications",
  githubStarsBase: 0,
  liveSubLabel: "▲ agentic AI platform live at Amazon Robotics",
  starsSubLabel: "▲ open source & portfolio repos",
};

export const journey: JourneyStep[] = [
  {
    num: "01",
    title: "B.E. Computer Engineering",
    desc: "Sardar Patel Institute of Technology, Mumbai. GPA 8.92 / 10.00.",
  },
  {
    num: "02",
    title: "Research @ IIT Patna",
    desc: "CNN + ViT brain tumor classifier. 99.68% precision. Published in Springer with 23+ citations.",
  },
  {
    num: "03",
    title: "M.S. Data Science",
    desc: "University of Wisconsin–Madison. GPA 3.85 / 4.00. Go Badgers.",
  },
  {
    num: "04",
    title: "Amazon Robotics",
    desc: "ETL for 10M+ daily events. LangGraph agentic platform. 40% hallucination reduction via evals.",
  },
  {
    num: "05",
    title: "Now · Open",
    desc: "Seeking full-time Data Science, AI Engineering, or ML Engineering roles.",
  },
];

export const projects: Project[] = [
  {
    tag: "Agentic AI · RAG",
    title: "SHMAS: Smart Hospital Multi-Agent System",
    desc: "LangGraph + RAG multi-agent triage for hospital support. Five agents for intake through escalation with real-time PostgreSQL visibility.",
    metrics: [
      { val: "60%", key: "Admin overhead cut" },
      { val: "5", key: "Specialized agents" },
      { val: "Live", key: "Streamlit + PostgreSQL" },
    ],
    stack: ["Python", "LangGraph", "LangChain", "RAG", "AWS", "Streamlit", "PostgreSQL"],
    link: "#",
  },
  {
    tag: "Data · Recommendations",
    title: "Restaurant Recommendation System",
    desc: "Snowflake-backed recommendation pipeline over 10,000+ records with Power BI analytics replacing manual reporting.",
    metrics: [
      { val: "40%", key: "Rating improvement" },
      { val: "10K+", key: "Records processed" },
      { val: "ETL", key: "Full pipeline owned" },
    ],
    stack: ["Python", "R", "SQL", "Snowflake", "Power BI", "ETL"],
    link: "#",
  },
  {
    tag: "Agentic AI · LLM Evals",
    title: "Amazon Robotics Agentic Platform",
    desc: "Internal LangGraph platform diagnosing 50+ ticket types. Structured outputs, citation grounding, and LLM-as-judge evals on AWS Fargate.",
    metrics: [
      { val: "40%", key: "Hallucination reduction" },
      { val: "85%", key: "Classification accuracy" },
      { val: "50+", key: "Ticket types" },
    ],
    stack: ["LangGraph", "LangChain", "Pydantic", "AWS Fargate", "Lambda", "Streamlit"],
    link: "#",
  },
  {
    tag: "Vision · Research",
    title: "Brain Tumor CAD System",
    desc: "CNN + Vision Transformer hybrid for multi-class brain tumor classification. Clinically validated with radiologists at IGIMS Hospital.",
    metrics: [
      { val: "99.68%", key: "Precision" },
      { val: "23+", key: "Citations" },
      { val: "2025", key: "Springer publication" },
    ],
    stack: ["TensorFlow", "Vision Transformers", "CNN", "MLOps", "PostgreSQL"],
    link: "https://doi.org/10.1007/s11042-025-20751-z",
  },
  {
    tag: "ML · A/B Testing",
    title: "Travel Booking Recommender",
    desc: "XGBoost + collaborative filtering with rigorous A/B validation. Statistically significant uplift in booking conversions.",
    metrics: [
      { val: "37%", key: "Conversion uplift" },
      { val: "p<0.05", key: "Significance" },
      { val: "SQL", key: "Feature engineering" },
    ],
    stack: ["XGBoost", "Collaborative Filtering", "A/B Testing", "SQL", "Python", "PySpark"],
    link: "#",
  },
];

export const editorialLines: EditorialLine[] = [
  {
    num: "01",
    statement: "Models that don't ship are just science projects.",
    emphasis: "science projects",
    tag: "Philosophy →",
  },
  {
    num: "02",
    statement: "I read the loss curve. I also read the P&L.",
    emphasis: "P&L",
    tag: "Business →",
  },
  {
    num: "03",
    statement: "State of the art is a starting point, not a goal.",
    emphasis: "starting point",
    tag: "Research →",
  },
  {
    num: "04",
    statement: "Good data beats a clever architecture. Every time.",
    emphasis: "clever architecture",
    tag: "Principle →",
  },
];

export const skills = {
  radar: [
    { axis: "ML / DL", value: 0.92 },
    { axis: "MLOps", value: 0.82 },
    { axis: "Data Eng", value: 0.88 },
    { axis: "NLP / LLMs", value: 0.94 },
    { axis: "Cloud/Infra", value: 0.78 },
    { axis: "Statistics", value: 0.86 },
  ] as RadarSkill[],
  bars: [
    { name: "Python", level: 0.95 },
    { name: "LangGraph", level: 0.92 },
    { name: "PyTorch", level: 0.88 },
    { name: "AWS", level: 0.85 },
    { name: "SQL", level: 0.9 },
    { name: "TensorFlow", level: 0.82 },
    { name: "Kubernetes", level: 0.68 },
    { name: "MLflow", level: 0.75 },
  ] as SkillBar[],
  categories: {
    Modeling: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "LangGraph",
      "XGBoost",
      "Vision Transformers",
      "Hugging Face",
    ],
    "Infra & Serving": [
      "AWS (Fargate, Lambda, Batch, Bedrock)",
      "Docker",
      "Kubernetes",
      "MLflow",
      "FastAPI",
      "Streamlit",
    ],
    Data: ["PySpark", "Kafka", "Snowflake", "PostgreSQL", "Athena", "ETL Pipelines"],
    Languages: ["Python", "SQL", "R", "Java", "Bash"],
  },
};

export const terminal = {
  lines: [
    { type: "prompt", text: "git log --oneline -5" },
    {
      type: "output",
      text: "a3f9c12  feat: LangGraph agent nodes for ticket diagnosis",
    },
    {
      type: "output",
      text: "b81d004  fix: context overflow causing hallucinations in RAG",
    },
    {
      type: "output",
      text: "cc20a1f  experiment: structured outputs with Pydantic grounding",
    },
    { type: "prompt", text: "python eval_agent.py --split holdout --judge llm" },
    {
      type: "success",
      text: "✓ Classification: 0.85  Hallucination rate: -40%  Eval set: 200 tickets",
    },
    { type: "prompt", text: "deploy --target aws-fargate --service agentic-platform" },
  ] as TerminalLine[],
};

export const heroDescription =
  "Not just models in notebooks. Real pipelines, real evals, real production systems. M.S. Data Science from UW–Madison (3.85 GPA).";
