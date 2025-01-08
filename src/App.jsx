import { useRef } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume"

function App() {
    return (
        <div className="container">
            <Navbar />
            <Home />
            <About />
            <Resume />
        </div>
    );
};

export default App;