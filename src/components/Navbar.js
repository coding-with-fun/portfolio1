import React from "react";

const Navbar = () => {
    return (
        <div className="navbar__container">
            <div className="left__container">
                <a href="#home" className="logo__container">
                    Arc Coder
                </a>
            </div>

            <div className="right__container">
                <a href="#home" className="home_link__container">
                    Home
                </a>
                <a href="#about" className="about_link__container">
                    About
                </a>
                <a href="#skills" className="skills_link__container">
                    Skills
                </a>
                <a href="#projects" className="projects_link__container">
                    Projects
                </a>
            </div>
        </div>
    );
};

export default Navbar;
