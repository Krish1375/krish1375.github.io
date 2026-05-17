// src/data.js

export const portfolioData = {

  hero: {
    name: "Krish Shah.",
    title: "Data Scientist.",
    subtitle: "I build AI that actually works.",
    description:
      "Not just models in notebooks. Real pipelines, real evals, real production systems. I just graduated from UW Madison and I'm looking for full-time roles in Data Science, AI Engineering, and ML.",
    imagePath: "/profile.jpeg",
    badge: "Available now · Data Scientist / AI Engineer / ML Engineer",
  },

  about: {
    heading: "The intersection of curiosity and engineering.",
    paragraphs: [
      "I grew up in Mumbai asking why things work the way they do. That question eventually led me to computer engineering, then to research labs, then across the world to Madison, Wisconsin where I just finished my Master's in Data Science at UW Madison with a 3.85 GPA. Go Badgers.",
      "Along the way I interned at Amazon Robotics. In summer I built the data pipelines that process over 10 million warehouse events every single day and turned them into dashboards that executives actually use. In the fall I came back and built something more ambitious: an agentic AI platform on LangGraph that lets engineers diagnose warehouse failures without ever opening a Jupyter notebook. I cut hallucinations by 40 percent by figuring out that context window overflow was the real culprit, then fixed it with structured outputs and proper eval frameworks.",
      "What I care about most is the gap between a model that scores well on a benchmark and a system that solves a real problem reliably. Closing that gap through evals, MLOps, and good engineering is where I spend most of my energy.",
    ],
    stats: [
      { value: "99.68%", label: "Precision on brain tumor classifier, published in Springer" },
      { value: "10M+", label: "Daily warehouse events processed at Amazon Robotics" },
      { value: "40%", label: "Hallucination reduction via structured outputs and eval frameworks" },
      { value: "23+", label: "Citations on my peer-reviewed publication" },
    ],
  },

  experience: [
    {
      company: "Amazon Robotics",
      role: "Data Scientist Intern, Fall",
      date: "Aug 2025 – Dec 2025",
      location: "Boston, MA",
      description:
        "I built the company's internal agentic AI platform. The core was a LangGraph state machine with specialized agent nodes that could automatically diagnose root causes across 50 plus ticket types. The tricky part was hallucinations. After digging into failure logs I found the main culprit was context window overflow, so I enforced structured outputs with Pydantic, added citation grounding, and built a few-shot prompting layer. Hallucinations dropped 40 percent. I also designed the ground truth eval set from historical resolved tickets and used LLM-as-a-judge scoring to get 85 percent classification accuracy. The whole thing ran serverless on AWS Fargate and Lambda behind a Streamlit interface the whole team could use.",
      tech: ["LangGraph", "LangChain", "Pydantic", "AWS Fargate", "Lambda", "Streamlit", "LLM Evals"],
      highlight: "40% hallucination reduction",
    },
    {
      company: "Amazon Robotics",
      role: "Data Scientist Intern, Summer",
      date: "Jun 2025 – Aug 2025",
      location: "Boston, MA",
      description:
        "My internship was all about making sense of scale. I built ETL pipelines using Python and AWS Batch that took over 10 million daily telemetry records from 500 plus warehouse sites, deduplicated them, normalized them, and windowed them into 5 minute aggregates. Then I built QuickSight dashboards that tracked over 100 KPIs with automated Athena refresh schedules so people stopped relying on manual Jupyter reports. By the end I was presenting data driven findings directly to engineering and executive teams about why specific KPIs were deviating across sites.",
      tech: ["Python", "AWS Batch", "Athena", "QuickSight", "ETL", "PySpark"],
      highlight: "10M+ events per day, 100+ KPIs tracked",
    },
    {
      company: "Mahavir Travels",
      role: "Data Scientist",
      date: "Jan 2024 – Aug 2024",
      location: "Remote",
      description:
        "Built a personalized recommendation engine using XGBoost and collaborative filtering, then validated it the right way with a proper A/B test. The uplift was 37 percent in booking conversions and it was statistically significant at p less than 0.05. I also did the feature engineering work upstream, using EDA and SQL to map user preferences and build seasonal demand forecasting features that fed into the model.",
      tech: ["XGBoost", "Collaborative Filtering", "A/B Testing", "SQL", "Python", "PySpark"],
      highlight: "37% conversion uplift",
    },
    {
      company: "Great Lakes Institute of Management",
      role: "Deep Learning Research Intern",
      date: "Jun 2023 – Aug 2023",
      location: "Chennai, India",
      description:
        "Built a real time video captioning system for retail surveillance using Transformers and R-CNN in PyTorch. Getting to 30 FPS was the challenge. I compared multiple architectures from recent papers, landed on Transformers plus R-CNN, evaluated caption quality with BLEU scores, then optimized with adaptive frame sampling. Ended up cutting memory by 55 percent and inference latency by 40 percent. That was the internship where I learned that production ML is a completely different problem from research ML.",
      tech: ["PyTorch", "Transformers", "R-CNN", "OpenCV", "BLEU Scoring"],
      highlight: "30 FPS live inference, 55% memory reduction",
    },
    {
      company: "Indian Institute of Technology Patna",
      role: "Deep Learning Research Intern",
      date: "Jan 2023 – Jun 2023",
      location: "Patna, India",
      description:
        "This was my first real research role and it changed how I think about what ML can do. I built a CNN and Vision Transformer hybrid in TensorFlow for multi-class brain tumor classification, hit 99.68 percent precision, and validated the results clinically with radiologists at IGIMS Hospital. The work got published in Springer's Multimedia Tools and Applications journal and has 23 plus citations. Seeing a model I built get reviewed by actual doctors made the whole field feel real to me.",
      tech: ["TensorFlow", "Vision Transformers", "CNN", "MLOps", "PostgreSQL"],
      highlight: "99.68% precision, Springer publication, 23+ citations",
    },
  ],

  education: [
    {
      school: "University of Wisconsin Madison",
      degree: "M.S. in Data Science",
      date: "Aug 2024 – May 2026",
      details: "GPA: 3.85 / 4.00",
      note: "Proud Badger. On Wisconsin! 🦡",
    },
    {
      school: "Sardar Patel Institute of Technology",
      degree: "B.E. in Computer Engineering",
      date: "Aug 2020 – May 2024",
      details: "GPA: 8.92 / 10.00",
      note: "Where it all started.",
    },
  ],

  projects: [
    {
      title: "SHMAS: Smart Hospital Multi-Agent AI System",
      description:
        "Built a multi-agent system using LangGraph and RAG to automate hospital support triage. Five agents handle intake, routing, prioritization, resolution, and escalation. It cut administrative overhead by 60 percent and reduced task time significantly. I connected Streamlit to a PostgreSQL backend so teams could see what the agents were doing in real time and where bottlenecks were forming.",
      tech: ["Python", "LangGraph", "LangChain", "RAG", "AWS", "Streamlit", "PostgreSQL"],
      metric: "60% reduction in administrative overhead",
      link: null,
    },
    {
      title: "Restaurant Recommendation and Analytics System",
      description:
        "Deployed a Snowflake backed recommendation system that processed over 10,000 records and improved user ratings by 40 percent. Built the full data ingestion pipeline and Power BI dashboards that replaced manual reporting so the management team could make faster decisions with better data.",
      tech: ["Python", "R", "SQL", "Snowflake", "Power BI", "ETL"],
      metric: "40% improvement in user ratings",
      link: null,
    },
  ],

  skills: [
    {
      category: "Agentic AI and GenAI",
      items: [
        "LangChain", "LangGraph", "LlamaIndex",
        "RAG Pipelines", "LLM Evals", "Prompt Engineering",
        "Structured Outputs", "Pydantic", "AWS Bedrock",
        "Hugging Face", "Vector Databases",
      ],
    },
    {
      category: "Machine Learning and Deep Learning",
      items: [
        "TensorFlow", "PyTorch", "Scikit-learn",
        "XGBoost", "Vision Transformers", "CNNs",
        "NLP", "A/B Testing", "Statistical Significance",
        "Feature Engineering", "MLflow",
      ],
    },
    {
      category: "Cloud and Data Infrastructure",
      items: [
        "AWS (SageMaker, Bedrock, Athena, Batch, S3, Lambda, Fargate)",
        "Azure Databricks", "GCP Vertex AI",
        "PySpark", "Kafka", "Hadoop",
        "Snowflake", "PostgreSQL", "MongoDB",
        "Docker", "Kubernetes",
      ],
    },
    {
      category: "Languages and Tools",
      items: [
        "Python", "SQL", "R", "Java",
        "FastAPI", "Streamlit", "Git",
        "ETL Pipeline Design", "Power BI", "QuickSight",
      ],
    },
  ],

  story: [
    {
      year: "2020",
      label: "Mumbai, engineering school",
      text: "Started computer engineering at Sardar Patel Institute of Technology in Mumbai. Took my first ML course and got completely hooked. Spent way too many late nights on Kaggle.",
    },
    {
      year: "2023",
      label: "IIT Patna, first real research",
      text: "Joined a research lab at IIT Patna to build a brain tumor classifier. Got to 99.68 percent precision and validated it with real radiologists at a hospital. Then it got published in Springer. That was the moment I knew I wanted to keep doing this.",
    },
    {
      year: "2023",
      label: "Great Lakes, learning production the hard way",
      text: "Built a real time video captioning system that had to run at 30 FPS. Spent weeks optimizing memory and latency. Learned that a model that works on a GPU in a lab is very different from a model that has to work in the real world.",
    },
    {
      year: "2024",
      label: "Moved to Madison, Wisconsin",
      text: "Got into the M.S. Data Science program at UW Madison. Moved across the world. Winter hit different. So did the coursework. Go Badgers.",
    },
    {
      year: "2025",
      label: "Amazon Robotics, summer",
      text: "First internship: built ETL pipelines handling 10 million plus events per day and QuickSight dashboards that replaced manual reporting for 500 warehouse sites. Presented directly to execs by the end.",
    },
    {
      year: "2025",
      label: "Amazon Robotics, fall",
      text: "Came back and built the company's first internal agentic AI platform using LangGraph. Figured out why the model was hallucinating, fixed it, got hallucinations down 40 percent. Shipped a Streamlit app the whole team uses.",
    },
    {
      year: "2026",
      label: "Just graduated. What's next?",
      text: "Finished my Master's in May 2026 with a 3.85 GPA. Looking for full-time roles in Data Science, AI Engineering, or ML Engineering. Let's talk.",
    },
  ],

  publications: [
    {
      title:
        "Computer-aided diagnosis for multi-class classification of brain tumors using CNN features via transfer-learning",
      journal: "Multimedia Tools and Applications, Springer",
      doi: "10.1007/s11042-025-20751-z",
      link: "https://doi.org/10.1007/s11042-025-20751-z",
      citations: "23+",
      year: "2025",
    },
  ],

  contact: [
    { label: "Email", value: "krishshah1375@gmail.com", link: "mailto:krishshah1375@gmail.com", icon: "mail" },
    { label: "Phone", value: "(608) 598-7070", link: "tel:6085987070", icon: "phone" },
    { label: "LinkedIn", value: "linkedin.com/in/krishshah10", link: "https://www.linkedin.com/in/krishshah10/", icon: "brand-linkedin" },
    { label: "GitHub", value: "github.com/Krish1375", link: "https://github.com/Krish1375", icon: "brand-github" },
  ],

};