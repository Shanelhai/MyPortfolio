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
        Aspiring web developer focused on building smart, user-friendly digital experiences with modern technologies.
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