import React, { useEffect, useState } from "react";
import './About.css';

const getVisitor = async() => {
    try {
        const response = await fetch('https://berberapanhttptrigger.azurewebsites.net/api/HttpTriggerJava?code=uUEhbmIzHBszimC7OZf4XmUXQR21lM7mp7xZm6uNhEFCAzFuIbQiKg%3D%3D');
        const data = await response.json();
        return data.value;
    } catch(error) {
        console.error("Couldn't grab visitor count", error)
        return null;
    }
};

const About = () => {
    const [counter, setCounter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCount = async() => {
            const visitorCount = await getVisitor();
            if (visitorCount !== null) {
                setCounter(visitorCount);
            } else {
                setCounter(0)
            }
            setLoading(false)
        };
        fetchCount();
    }, []);

    return (

        <div className="about">
            <h2>Om</h2>
            <p>
            Jag har jobbat som trader inom spelindustrin i många år och håller nu på att
            utveckla mina färdigheter som utvecklare - en ny sträng på min lyra.
             <br/><br/>
            Den här sidan är byggd som en del av Azure Resume Challenge.

            Du är besökare nummer <span className="count"><b>{loading ? "..." : counter}</b></span>!
            </p>
        </div>

    );
};

export default About;