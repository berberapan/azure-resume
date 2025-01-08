import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (

<nav className="navbar" role="navigation">
    <div className="navbar-right">
        <ul className="navbar-links">
            <li>
                <a href="#home">Hem</a>
            </li>
            |
            <li>
                <a href="#about">Om</a>
            </li>
            |
            <li>
                <a href="#cv">CV</a>
            </li>
        </ul>
    </div>
</nav>

    );
};

export default Navbar;