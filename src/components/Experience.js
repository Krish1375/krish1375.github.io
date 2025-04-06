import React from 'react';

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="job">
        <h3>Data Scientist | Mahavir Travels</h3>
        <p>January 2024 - August 2024</p>
        <ul>
          <li>Engineered a time-series model (ARIMA) using SQL, boosting sales by 40% with 90% accuracy.</li>
          <li>Designed a recommendation system with Databricks, PySpark, and MLlib, increasing click-through rates by 60%.</li>
          <li>Spearheaded an anomaly detection system (Isolation Forest) reducing fraudulent bookings by 95%.</li>
          <li>Visualized performance with Tableau dashboards, improving system efficiency by 15%.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Deep Learning Research Intern | Great Lakes Institute of Management</h3>
        <p>June 2023 - August 2023</p>
        <ul>
          <li>Deployed a real-time video captioning model processing 30 fps, enhancing user experience.</li>
          <li>Optimized frame extraction with Savitzky-Golay filtering reducing processing time by 40%.</li>
          <li>Implemented Apriori algorithm identifying top product pairings, increasing basket size.</li>
        </ul>
      </div>
      <div className="job">
        <h3>Deep Learning Research Intern | IIT Patna</h3>
        <p>January 2023 - June 2023</p>
        <ul>
          <li>Achieved 99.68% accuracy in brain tumor detection using TensorFlow models.</li>
          <li>Refined the model based on radiologist feedback and PostgreSQL-based Data Lake integration.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
