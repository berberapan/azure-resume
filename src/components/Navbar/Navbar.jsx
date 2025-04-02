import React from "react";
import './Navbar.css';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    };


    return (

<nav className="navbar" role="navigation">
    <div className="navbar-right">
        <ul className="navbar-links">
            <li>
                <a href="#home" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home')
                }}>Hem</a>
            </li>
            |
            <li>
                <a href="#about" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('about')
                }}>Om</a>
            </li>
            |
            <li>
                <a href="#cv" onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('cv')
                }}>CV</a>
            </li>
        </ul>
    </div>
</nav>

    );
};

export default Navbar;
