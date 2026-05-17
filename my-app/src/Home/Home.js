import React from "react";
import two from "../Images/two.jpg";
import './Home.css';
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I am <span>Shanelhai</span></h1>
          <p className="hero-subtitle">
          Aspiring web developer with a strong interest in creating smart, intuitive, and user-focused digital solutions. Skilled in modern web technologies including React.js, Node.js, Express.js, and MongoDB. Possess 6 months of hands-on experience in web development, including building and delivering a real-world eCommerce website project for a client. Experienced in developing responsive, scalable, and user-friendly applications with a strong focus on clean code, performance, and problem-solving. Continuously learning and exploring modern development practices to enhance technical expertise.
          </p>
          <div className="hero-buttons">
            <Link to="/contact">
              <button className="btn-primary">Contact Me</button>
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
      <Footer/>
    </>
  );
}
export default Home;