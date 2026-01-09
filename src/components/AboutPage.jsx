import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <section id="about" className="about-page">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-title">
              A little of this, 
              <span className="highlight-text"> a little of that</span>
            </h2>

            <div className="about-description">
              <p>
                I’m <strong>Salome</strong>, a computer science student and full-stack developer who enjoys building interactive, well-thought-out digital experiences. I work across frontend and backend, combining clean UI with solid logic to turn ideas into real products.
              </p>

              <p>
                My experience includes modern frontend technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, along with backend development using <strong>Python</strong>, <strong>Flask</strong>, RESTful APIs, and lower-level programming in <strong>C</strong> and <strong>C#</strong>. I also enjoy experimenting with game development and interactive systems, which shapes how I think about user experience.
              </p>

              <p>
                When I’m not coding, I like exploring new ideas, learning new tools, and working on small experiments. I value <strong>balance</strong>, <strong>curiosity</strong>, and steady growth - improving a little every day by building things and learning from them.
              </p>
            </div>

            <div className="work-experience-link">
              <span>Resume</span>
              <span className="arrow">→</span>
            </div>
          </div>

          <div className="about-visual">
            <div className="logo-container">
              <div className="logo-3d">
                <img src="https://i.pinimg.com/736x/9f/5d/d7/9f5dd7891c4ffb1748443ea9cf3f826c.jpg" alt="application" className="application-img" />
              </div>
            </div>
          </div>
        </div>

        <div className="skills-banner">
          <div className="banner-text">
            ✦ PROBLEM SOLVING ✦ ADAPTABLE ✦ DETAIL-ORIENTED ✦ CURIOUS ✦ COLLABORATIVE ✦ SELF-DRIVEN ✦ QUICK LEARNER ✦ COMMUNICATIVE ✦ CREATIVE ✦ PROBLEM SOLVING ✦ ADAPTABLE ✦ DETAIL-ORIENTED ✦ CURIOUS ✦ COLLABORATIVE ✦ SELF-DRIVEN ✦ QUICK LEARNER ✦ COMMUNICATIVE ✦ CREATIVE
          </div>
        </div>

        <div className="skills-banner skills-banner-shadow">
        </div>
      </div>

    </section>
  );
};

export default AboutPage;