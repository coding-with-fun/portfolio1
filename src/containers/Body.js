import React from "react";

import About from "./Body/About";
import ContactUs from "./Body/ContactUs/ContactUs";
import Home from "./Body/Home";
import Projects from "./Body/Projects/Projects";
import Skills from "./Body/Skills";

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
