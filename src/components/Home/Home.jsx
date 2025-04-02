import React, { useState } from "react";
import './Home.css';

const Home = () => {    
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false)

    const emailParts = {
        start: 'josef',
        middle: '@',
        end: 'boukdir.se'
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(`${emailParts.start}${emailParts.middle}${emailParts.end}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (

        <div className="home" id="home">
            <div className="box-wrapper">
                <div className="name">
                    <span>Josef <span className="color-change"><span>B</span><span>o</span><span>u</span><span>k</span><span>d</span><span>i</span><span>r</span></span></span>
                </div>
                <div className="home-contacts">
                    <span 
                    onClick={copyEmail} 
                    className="email-copy"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    >
                        {copied ? 'copied!' : (isHovered ? `${emailParts.start}[at]${emailParts.end}` : 'email')}
                    </span>
                    <span><a href="https://www.linkedin.com/in/josefboukdir/">linkedin</a></span>
                    <span><a href="https://github.com/berberapan">github</a></span>
                </div>
            </div>
        </div>

    );
};

export default Home;
