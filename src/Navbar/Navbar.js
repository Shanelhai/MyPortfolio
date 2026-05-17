import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    window.addEventListener('resize', (event) => {
        setIsOpen(false);
        console.log("This is window's resize listner");
    });
   
    return (
        <header className="header">
            <nav className="navbar">
                <NavLink to="/" className="nav-logo">My <span>Portfolio</span></NavLink>
                <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-links" activeClassName="active-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className="nav-links" activeClassName="active-link">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/project" className="nav-links" activeClassName="active-link">Project</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className="nav-links" activeClassName="active-link">Contact</NavLink>
                    </li>
                </ul>
                <div className='hamburger' onClick={toggleMenu}>
                    <GiHamburgerMenu className='ham-item' />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;


