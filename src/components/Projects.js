import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Sentiment Analysis Pipeline',
    description: 'A comprehensive pipeline using AWS services and BERT to analyze sentiments from thousands of reviews.'
  },
  {
    title: 'Network Intrusion Detection System',
    description: 'A Python-based system using TensorFlow and Splunk to detect and alert on network intrusions in real time.'
  },
  {
    title: 'Restaurant Data Analysis',
    description: 'Analyzed and visualized restaurant data to drive improved decision making with interactive dashboards.'
  }
];

const Projects = () => (
  <section id="projects" className="projects">
    {projects.map((project, index) => (
      <div className="project-card" key={index}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    ))}
  </section>
);

export default Projects;
