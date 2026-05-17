import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* LEFT */}
                <div className="footer-left">
                    <h1>Shanelhai</h1>
                    <p>Crafting modern web experiences with clean code & creativity.</p>
                </div>

                {/* CENTER */}
                <div className="footer-center">
                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/project">Project</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                    <p>© 2026 Shanelhai. All rights reserved.</p>
                </div>

                {/* RIGHT */}
                <div className="footer-right">
                    <div className="footer-icons">
                         <a href="https://github.com/Shanelhai" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/shanelhai-saifi-82459337b/" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>

                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;