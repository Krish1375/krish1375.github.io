// src/data.js

export const portfolioData = {

  hero: {
    name: "Krish Shah.",
    title: "Data Scientist.",
    subtitle: "I am curious on what AI can really do.",
    description:
      "Not just models in notebooks. Real pipelines, real evals, real production systems. I just graduated from UW Madison and I'm looking for full-time roles in Data Science, AI Engineering, and ML.",
    imagePath: "/profile.jpeg",
    badge: "Available now · Data Scientist / AI Engineer / ML Engineer",
  },

  about: {
    heading: "The intersection of curiosity and engineering.",
    paragraphs: [
      "I started my career in Mumbai, India studying computer engineering. I got opportunity to work at research labs, then across the world to Madison, Wisconsin where I just finished my Master's in Data Science at UW Madison with a 3.85 GPA. Go Badgers.",
      "I got to intern at Amazon Robotics in Boston for 7 months during my masters. Those robots are beyond amazing! I worked on data pipelines that process all of America's Amazon Fulfillment Centers and Warehouses data every single second. I also worked on a prototype of an agentic AI framework on LangGraph. I worked on hallucinations, context windows and other fun stuff about Agents and LLMs. It's such a vast and a grey area!",
      "What I care about most is the gap between a model that scores well on a benchmark and a system that solves a real problem reliably. Closing that gap through evals, MLOps, and good engineering is what interests me.",
    ],
    stats: [
      { value: "24 Months", label: "Work Experience" },
      { value: "3.85 GPA", label: "Masters in Data Science at University of Wisconsin-Madison" },
      { value: "26+ Citations", label: "Research Contributions" },
    ],
  },

  experience: [
    {
      company: "Amazon Robotics",
      role: "Data Scientist Intern",
      date: "Jun 2025 – December 2025",
      location: "Boston, MA",
      description:
        "I built ETL pipelines using Python that was handling over 10 million daily telemetry records from 500 plus warehouse sites. I built QuickSight dashboards that tracked over 100 KPIs to replace manual Jupyter reports. I aso worked on Agentic Framework using LangGraph with specialized agent that could automatically diagnose root causes across 50 plus ticket types. I worked on hallucinations, context window overflow, Pydantic inputs and outpust, added citation grounding, and built a few-shot prompting layer. I also designed the ground truth eval set from historical resolved tickets and used LLM-as-a-judge scoring. The whole thing ran serverless on AWS Fargate and Lambda behind a Streamlit interface the whole team could use.",
      tech: ["Python", "AWS Batch", "Athena", "QuickSight", "ETL", "PySpark"],
      highlight: "Data Pipeline and Agentic AI Framework",
    },
    {
      company: "Mahavir Travels",
      role: "Software Engineer",
      date: "Jan 2024 – Aug 2024",
      location: "Remote (Mumbai, India)",
      description:
        "I built a personalized recommendation engine using XGBoost and collaborative filtering, validating it with A/B testing. The uplift was 37 percent in booking conversions. I also worked on feature engineering, using EDA and SQL to map user preferences and build seasonal demand forecasting features that fed into the model. Additionally, I developed AI chatbots using RAG, one for FAQs and another for personalized recommendations.",
      tech: ["XGBoost", "Collaborative Filtering", "A/B Testing", "SQL", "Python", "PySpark"],
      highlight: "Travel booking recommendation system and AI chatbots",
    },
    {
      company: "Great Lakes Institute of Management",
      role: "Deep Learning Research Intern",
      date: "Jun 2023 – Aug 2023",
      location: "Chennai, India",
      description:
        "I built a real time video captioning system for retail surveillance using Transformers and R-CNN in PyTorch. Getting to 30 FPS was the challenge. I compared multiple architectures from recent papers, evaluated caption quality with BLEU scores, then optimized with adaptive frame sampling. Ended up cutting memory by 55 percent and inference latency by 40 percent.",
      tech: ["PyTorch", "Transformers", "R-CNN", "OpenCV", "BLEU Scoring"],
      highlight: "Live video captioning for retail store analytics",
    },
    {
      company: "Indian Institute of Technology Patna",
      role: "Deep Learning Research Intern",
      date: "Jan 2023 – Jun 2023",
      location: "Patna, India",
      description:
        "This was my first real research role and it changed how I think about what ML can do in the field of biology. I built a CNN and Vision Transformer hybrid in TensorFlow for multi-class brain tumor classification, and validated the results clinically with radiologists at IGIMS Hospital. The work got published in Springer's Multimedia Tools and Applications journal and has 25 plus citations. Seeing a model I built get reviewed by actual doctors made the whole field feel real to me.",
      tech: ["TensorFlow", "Vision Transformers", "CNN", "MLOps", "PyTorch"],
      highlight: "Brain tumor classification, Springer publication, 25+ citations",
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
    },
  ],

  projects: [
    {
      title: "SHMAS: Smart Hospital Multi-Agent AI System",
      description:
        "Built a multi-agent system using LangGraph and RAG to automate hospital support triage. Five agents handle intake, routing, prioritization, resolution, and escalation. It cut administrative overhead by 60 percent and reduced task time significantly. I connected Streamlit to a PostgreSQL backend so teams could see what the agents were doing in real time and where bottlenecks were forming.",
      tech: ["Python", "LangGraph", "LangChain", "RAG", "AWS", "Streamlit", "PostgreSQL"],
      metric: "Agentic workflow to reduce administrative overhead in hospitals",
      link: "https://github.com/Krish1375/AuraMed",
    },
    {
      title: "Restaurant Recommendation and Analytics System",
      description:
        "Deployed a Snowflake backed recommendation system that processed over 10,000 records and improved user ratings by 40 percent. Built the full data ingestion pipeline and Power BI dashboards that replaced manual reporting so the management team could make faster decisions with better data.",
      tech: ["Python", "R", "SQL", "Snowflake", "Power BI", "ETL"],
      metric: "Recommendation and Analytics for restaurants",
      link: null,
    },
    {
      title: "Crop and Weed Segmentation",
      description: "Implemented a deep learning model for precision agriculture that segments crop and weed pixels from field images. This helps in targeted herbicide application, reducing chemical usage and improving crop yield.",
      tech: ["Python", "Computer Vision", "Deep Learning", "PyTorch"],
      metric: "Precision Agriculture",
      link: "https://github.com/Krish1375/Crop-and-Weed-Segmentation",
    },
    {
      title: "Exoplanet Detection",
      description: "Developed a machine learning pipeline to analyze time-series light curve data from space telescopes. Handled data imbalances and extracted features to accurately classify potential exoplanet transit signatures.",
      tech: ["Python", "Machine Learning", "Time Series Analysis", "Scikit-learn"],
      metric: "Astronomical Data Analysis",
      link: "https://github.com/Krish1375/exoplanet_detection",
    },
    {
      title: "Image Compression using K-Means",
      description: "Built an image compression algorithm utilizing K-Means clustering. By reducing the number of colors in an image to the most dominant ones, it significantly decreases the file size while preserving visual quality.",
      tech: ["Python", "Unsupervised Learning", "K-Means", "OpenCV"],
      metric: "Efficient Data Storage",
      link: "https://github.com/Krish1375/Image-Compression-using-K-means",
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
      year: "August 2020",
      label: "Mumbai, Bachelors in Engineering",
      text: "Came 231 rank out of hundred of thousands students all over the country and started computer engineering at Sardar Patel Institute of Technology in Mumbai.",
    },
    {
      year: "January 2023",
      label: "IIT Patna, first real research",
      text: "Joined a research lab at IIT Patna to build a brain tumor classifier. Got better results than industry and validated it with real radiologists at a hospital. Then it got published in Springer and currently having 25+ citations.",
    },
    {
      year: "June 2023",
      label: "Great Lakes, second research in Deep Learning",
      text: "Built a real time video captioning system that had to run at 30 FPS. Spent weeks optimizing memory and latency. Utilized applications for retail store analytics.",
    },
    {
      year: "August 2024",
      label: "Moved to Madison, Wisconsin",
      text: "Got into the M.S. Data Science program at UW Madison. Winter hit different. So did the coursework. Go Badgers.",
    },
    {
      year: "June 2025",
      label: "Amazon Robotics, first internship",
      text: "Built ETL pipelines handling 10 million plus events per day and QuickSight dashboards that replaced manual reporting for 500 warehouse sites. Presented directly to stakeholders. Built agentic AI framework using LangGraph. Fixed agent hallucinations, context windows, and many more. Shipped a Streamlit app the whole team uses.",
    },
    {
      year: "May 2026",
      label: "Just graduated. What's next?",
      text: "Finished my Master's with a 3.85 GPA. Looking for full-time roles in Data Science, AI Engineering, or ML Engineering. Let's talk.",
    },
  ],

  publications: [
    {
      title:
        "Computer-aided diagnosis for multi-class classification of brain tumors using CNN features via transfer-learning",
      journal: "Multimedia Tools and Applications, Springer",
      doi: "10.1007/s11042-025-20751-z",
      link: "https://doi.org/10.1007/s11042-025-20751-z",
      citations: "25+",
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