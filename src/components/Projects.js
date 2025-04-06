import React, { useState } from 'react';
import Modal from './Modal';

const Projects = () => {
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    {
      title: 'Sentiment Analysis Pipeline',
      subtitle: 'AWS, SageMaker, Glue, Athena, S3, CloudWatch, Data Wrangler, BERT',
      description: 'Built an AWS-based ML pipeline for sentiment analysis on 23,000+ reviews. Automated data ingestion and cleaning using AWS Glue, reducing preprocessing time by 40%.'
    },
    {
      title: 'Network Intrusion Detection System (NIDS)',
      subtitle: 'Python, TensorFlow, Databricks, Splunk, MongoDB',
      description: 'Developed a NIDS achieving a 97% detection rate using anomaly detection techniques and real-time alerting with Splunk.'
    },
    {
      title: 'Restaurant Data Analysis and Recommendation System',
      subtitle: 'Python, R, Power BI, SQL, Snowflake',
      description: 'Processed over 10,000 restaurant records, constructed interactive dashboards with Power BI, and enhanced managerial decision-making.'
    }
  ];

  const openModal = (project) => {
    setModalContent(project);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx} onClick={() => openModal(project)}>
            <h3>{project.title}</h3>
            <p>{project.subtitle}</p>
          </div>
        ))}
      </div>
      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
};

export default Projects;
