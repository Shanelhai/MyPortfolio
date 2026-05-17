import React from "react";
import "./About.css";
import two from "../Images/two.jpg";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
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
        {/* ✅ Projects Section */}
        <div className="about-projects">
          <h2>Projects</h2>

          <div className="about-project-card">
            <h3>Recipe Sharing Web App</h3>
            <p>
              <strong>Live:</strong>{" "}
              <a href="https://shaan-recipe.vercel.app" target="_blank" rel="noreferrer">
                shaan-recipe.vercel.app
              </a>
            </p>
            <p><strong>Tech:</strong> React.js, Node.js, Express.js, MongoDB, JWT, Axios</p>
            <ul>
              <li>Built a full-stack recipe platform for browsing and uploading recipes</li>
              <li>Implemented JWT authentication and private routes</li>
              <li>Created REST APIs for CRUD operations</li>
              <li>Deployed using Vercel and Render/Railway</li>
            </ul>
          </div>

          <div className="about-project-card">
            <h3>E-Commerce Backend System</h3>
            <p>
              <strong>Live Shop:</strong>{" "}
              <a href="https://www.etsy.com" target="_blank" rel="noreferrer">
                uRiseVentures (Etsy)
              </a>
            </p>
            <p><strong>Tech:</strong> Node.js, Express.js, MongoDB, JWT, bcrypt</p>
            <ul>
              <li>Designed modular REST APIs for products, cart, and orders</li>
              <li>Implemented role-based authorization (Admin/User)</li>
              <li>Built cart and order management system</li>
              <li>Handled image uploads and static file serving</li>
            </ul>
          </div>

          <div className="about-project-card">
            <h3>ApnaMovies – Movie App</h3>
            <p>
              <strong>Live:</strong>{" "}
              <a href="https://apne-movies.vercel.app" target="_blank" rel="noreferrer">
                apne-movies.vercel.app
              </a>
            </p>
            <p><strong>Tech:</strong> React.js, Node.js, Express.js, TMDB API</p>
            <ul>
              <li>Fetched dynamic movie data using TMDB API</li>
              <li>Implemented routing with dynamic pages</li>
              <li>Built responsive UI using React hooks</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
