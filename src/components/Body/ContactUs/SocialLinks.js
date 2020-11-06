import React from 'react'


import FaceBookLogo from "../../../assets/socialIcons/facebook.svg";
import GithubLogo from "../../../assets/socialIcons/github.svg";
import GoogleLogo from "../../../assets/socialIcons/google.svg";
import InstagramLogo from "../../../assets/socialIcons/instagram.svg";
import LinkedInLogo from "../../../assets/socialIcons/linkedin.svg";
import TwitterLogo from "../../../assets/socialIcons/twitter.svg";
import WhatsAppLogo from "../../../assets/socialIcons/whatsapp.svg";
import YouTubeLogo from "../../../assets/socialIcons/youtube.svg";

const SocialLinks = () => {
    return (
        <div className="social__links">
                <span>
                    <a
                        href="https://github.com/arc-coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={GithubLogo}
                            alt="Github Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a
                        href="https://wa.me/919099976321?text=Hello%20I%20am%20interested%20to%20contact%20you."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={WhatsAppLogo}
                            alt="WhatsApp Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a
                        href="https://linkedin.com/in/harshpatel2124"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={LinkedInLogo}
                            alt="LinkedIn Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.facebook.com/harsh2124"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={FaceBookLogo}
                            alt="FaceBook Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a
                        href="https://twitter.com/arc__coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={TwitterLogo}
                            alt="Twitter Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.instagram.com/arc__coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={InstagramLogo}
                            alt="Instagram Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.youtube.com/channel/UC5fLpNYfnyHYX7rvm1LYEyQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={YouTubeLogo}
                            alt="YouTube Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
                <span>
                    <a href="/" target="_blank" rel="noreferrer">
                        <img
                            src={GoogleLogo}
                            alt="Google Logo"
                            className="social_icon_img"
                        />
                    </a>
                </span>
            </div>
    )
}

export default SocialLinks
