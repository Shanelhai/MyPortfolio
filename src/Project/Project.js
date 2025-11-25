import React from "react";
import ProjectData from "./ProjectData";
import "./Project.css";

const Project = () => {
  return (
    <div className="project-container">
      <div className="project-grid">
        {ProjectData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.name} className="project-image" />
            <h2 className="project-name">{project.name}</h2>
            <p className="project-language">{project.Language}</p>
            <p className="project-description">{project.description}</p>
            <a href={project.btn} target="_blank" rel="noopener noreferrer" className="project-btn">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;

