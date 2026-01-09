import React, { useState } from 'react';
import './ProjectShowcase.css';

const ProjectShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      number: "01",
      title: "School Finder",
      category: "MOBILE / FULL-STACK",
      subtitle: "Flutter & Dart",
      description: "A cross-platform mobile application built with Flutter and Dart that helps users search and explore schools based on different criteria. Focused on clean navigation, structured data handling, and intuitive user flows.",
      tech: ["Flutter", "Dart"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "10%", left: "5%" }
    },
    {
      id: 2,
      number: "02",
      title: "Scrabble Game",
      category: "GAME / PYTHON",
      subtitle: "Game Logic & Scoring",
      description: "A Scrabble-style word game built in Python, focusing on game rules, scoring logic, and structured handling of word validation and game state.",
      tech: ["Python"],
      image: "https://images.unsplash.com/photo-1606513540975-7e5f94e3d8d6?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "35%", left: "30%" }
    },
    {
      id: 3,
      number: "03",
      title: "Connect Four",
      category: "GAME / LOGIC",
      subtitle: "Game Logic in C++",
      description: "A C++ implementation of the classic Connect Four game, focusing on game state management, win condition logic, and structured program design.",
      tech: ["C++"],
      image: "https://images.unsplash.com/photo-1606513540975-7e5f94e3d8d6?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "15%", left: "65%" }
    },
    {
      id: 4,
      number: "04",
      title: "Postcard Studio",
      category: "FRONTEND",
      subtitle: "Interactive Web App",
      description: "A creative web application for designing and customizing postcards, with a focus on layout, interaction, and user experience.",
      tech: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "60%", left: "70%" }
    },
    {
      id: 5,
      number: "05",
      title: "Python Projects",
      category: "BACKEND / PYTHON",
      subtitle: "Small Tools & Experiments",
      description: "A collection of Python projects and exercises exploring backend logic, data handling, and problem-solving through small, focused programs.",
      tech: ["Python"],
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "65%", left: "10%" }
    },
    {
      id: 6,
      number: "06",
      title: "Unity Game Project",
      category: "GAME DEVELOPMENT",
      subtitle: "Gameplay & Interaction",
      description: "A game developed in Unity exploring gameplay mechanics, player interaction, and state management, with a focus on building engaging interactive systems.",
      tech: ["Unity", "C#"],
      image: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "90%", right: "5%" }
    },
    {
      id: 7,
      number: "07",
      title: "C# Projects",
      category: "DESKTOP / BACKEND",
      subtitle: "Object-Oriented Programming",
      description: "A collection of C# projects focused on object-oriented programming concepts, application structure, and working with structured logic in a strongly typed language.",
      tech: ["C#"],
      image: "https://images.unsplash.com/photo-1581091215367-59ab6b1c3c5f?w=600&h=400&fit=crop",
      demoUrl: "#",
      codeUrl: "#",
      position: { top: "85%", left: "40%" }
    }

  ];

  return (
    <section id="projects" className="project-showcase">
      <div className="geometric-bg">
        <div className="geo-shape shape-1"></div>
        <div className="geo-shape shape-2"></div>
        <div className="geo-shape shape-3"></div>
      </div>

      <div className="projects-container">
        <div className="projects-header">
          <div className="section-label">SELECTED WORKS</div>
          <h2 className="projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-subtitle">
            A collection of projects that showcase my passion for creating
            exceptional digital experiences with modern technologies.
          </p>
        </div>

        <div className="projects-web">
          <svg className="connection-web" width="100%" height="100%" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8338ec" />
                <stop offset="100%" stopColor="#ff006e" />
              </linearGradient>
              <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff006e" />
                <stop offset="100%" stopColor="#3a86ff" />
              </linearGradient>
              <linearGradient id="line-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3a86ff" />
                <stop offset="100%" stopColor="#8338ec" />
              </linearGradient>
            </defs>

            {/* Main central web of connections */}
            <line x1="10%" y1="15%" x2="50%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="1" opacity="0.4" />
            <line x1="35%" y1="40%" x2="50%" y2="50%" stroke="url(#line-gradient-1)" strokeWidth="1" opacity="0.4" />
            <line x1="70%" y1="20%" x2="50%" y2="50%" stroke="url(#line-gradient-2)" strokeWidth="1" opacity="0.4" />
            <line x1="75%" y1="65%" x2="50%" y2="50%" stroke="url(#line-gradient-2)" strokeWidth="1" opacity="0.4" />
            <line x1="15%" y1="70%" x2="50%" y2="50%" stroke="url(#line-gradient-3)" strokeWidth="1" opacity="0.4" />
            <line x1="85%" y1="92%" x2="50%" y2="50%" stroke="url(#line-gradient-3)" strokeWidth="1" opacity="0.4" />

            {/* Secondary connections between nodes */}
            <line x1="10%" y1="15%" x2="35%" y2="40%" stroke="url(#line-gradient-1)" strokeWidth="0.5" opacity="0.3" />
            <line x1="35%" y1="40%" x2="70%" y2="20%" stroke="url(#line-gradient-2)" strokeWidth="0.5" opacity="0.3" />
            <line x1="70%" y1="20%" x2="75%" y2="65%" stroke="url(#line-gradient-2)" strokeWidth="0.5" opacity="0.3" />
            <line x1="15%" y1="70%" x2="75%" y2="65%" stroke="url(#line-gradient-3)" strokeWidth="0.5" opacity="0.3" />
            <line x1="15%" y1="70%" x2="85%" y2="92%" stroke="url(#line-gradient-3)" strokeWidth="0.5" opacity="0.3" />
            <line x1="49%" y1="85%" x2="70%" y2="70%" stroke="url(#line-gradient-3)" strokeWidth="0.6" opacity="0.35" />
            <line x1="49%" y1="85%" x2="50%" y2="50%" stroke="url(#line-gradient-3)" strokeWidth="0.8" opacity="0.45" />

            {/* Central point indicator */}
            <circle cx="50%" cy="50%" r="3" fill="#ff006e" opacity="0.6" />
          </svg>

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-node"
              style={{
                ...project.position,
                animationDelay: `${index * 0.15}s`
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="node-inner">
                <div className="node-number">{project.number}</div>
                <div className="node-line-decoration"></div>
                <div className="node-content">
                  <div className="node-category">{project.category}</div>
                  <h3 className="node-title">{project.title}</h3>
                  <p className="node-subtitle">{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-header">
              <span className="modal-number">{selectedProject.number}</span>
              <span className="modal-category">{selectedProject.category}</span>
            </div>
            <div className="modal-info">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-subtitle">{selectedProject.subtitle}</p>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-tech">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="modal-links">
              <a href={selectedProject.codeUrl} className="modal-link code">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectShowcase;