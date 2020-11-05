import React from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

const Body = () => {
    return (
        <div className="body__container">
            <Home />
            <About />
            <Skills />
            <Projects />
            <ContactUs />
        </div>
    );
};

export default Body;
