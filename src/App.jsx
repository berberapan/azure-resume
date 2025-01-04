import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <About />
        </div>
    );
};

export default App;