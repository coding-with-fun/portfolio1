import React, { useState } from "react";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar__container">
            <div className="left__container">
                <a href="#home">
                    <div className="logo__container logo_text">Arc Coder</div>
                    <div className="logo__container logo_image">
                        <img src={Logo} alt="Logo" />
                    </div>
                </a>
            </div>

            <div className="right__container">
                <div
                    className={`menu__button ${
                        isMenuOpen ? "is_open" : "is_close"
                    }`}
                    onClick={() => toggleMenu()}
                >
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                    <div className="menu__line"></div>
                </div>
                <div className="page_links">
                    <a
                        href="#home"
                        className="home_link__container"
                        onClick={() => toggleMenu()}
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="about_link__container"
                        onClick={() => toggleMenu()}
                    >
                        About
                    </a>
                    <a
                        href="#skills"
                        className="skills_link__container"
                        onClick={() => toggleMenu()}
                    >
                        Skills
                    </a>
                    <a
                        href="#projects"
                        className="projects_link__container"
                        onClick={() => toggleMenu()}
                    >
                        Projects
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
