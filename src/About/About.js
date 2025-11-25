import React from "react";
import "./About.css";
import two from "../Images/two.jpg";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-top">
        <div className="about-text">
          <h1>My Name is <span>Shanelhai</span></h1>
          <p>
            Self-motivated BCA fresher with strong problem-solving ability and a positive mindset. 
            I am adaptable, punctual, and a collaborative team player who also performs well independently. 
            I bring a friendly attitude, strong work ethics, and a passion for continuous growth.
          </p>
        </div>

        <div className="about-image">
          <img src={two} alt="Shanelhai" />
        </div>
      </div>
      <div className="about-grid">

        <div className="about-card">
          <h2>Education</h2>
          <ul>
            <li>
              <strong>Uttaranchal University, Dehradun</strong> — BCA (2025)
            </li>
            <li>
              <strong>SVM Inter College</strong> — Intermediate (2022)
            </li>
            <li>
              <strong>SVM Inter College</strong> — High School (2020)
            </li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Skills</h2>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Express.js</li>
            <li>C#</li>
            <li>ASP.NET</li>
          </ul>
        </div>

      </div>

    </section>
  );
}
