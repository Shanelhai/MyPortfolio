import React from "react";
import two from "../Images/two.jpg";
import './Home.css';
import { Link } from "react-router-dom";


const Home = ()=>{
    return(
        <>
        <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I am <span>Shanelhai</span></h1>
        <p className="hero-subtitle">
        Aspiring web developer with a strong interest in creating smart, intuitive, and user-focused digital solutions. Skilled in modern web technologies including React.js, Angular, Express.js, .NET, and MS SQL. Currently a fresher with hands-on experience gained through self-built projects, continuous learning, and practical experimentation. Focused on writing clean, efficient code and building responsive, scalable applications while steadily advancing technical depth and problem-solving skills.
        </p>
        <div className="hero-buttons">
         <Link to="/contact">
            <button className="btn-primary">Hire Me</button>
        </Link>
        <Link to="/project">
            <button className="btn-secondary">My Projects</button>
        </Link>
        </div>
      </div>

      <div className="hero-image-container">
        <img src={two} alt="Shanelhai" className="hero-image" />
      </div>
    </section>
        </>
    );
}
export default Home;