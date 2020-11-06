import React from "react";
import { MapContainer } from "./MapContainer";

const ContactUs = () => {
    return (
        <div className="contact_me__container" id="contactMe">
            <div className="contact__heading">Get In Touch</div>

            <div className="details__container">
                <div className="my_details">
                    <div className="my_details__heading">Address</div>
                    <div className="my_details__data">
                        <a
                            href="https://goo.gl/maps/B9ZFpSFRMkJyewpR7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Maninagar, Ahmedabad, Gujarat 382443
                        </a>
                    </div>

                    <div className="my_details__heading">Email address</div>
                    <div className="my_details__data">
                        <a
                            href="mailto:dev@arccoder.in"
                            target="_blank"
                            rel="noreferrer"
                        >
                            dev@arccoder.in
                        </a>
                    </div>

                    <div className="my_details__heading">Contact Number</div>
                    <div className="my_details__data">
                        <a
                            href="tel:9099976321"
                            target="_blank"
                            rel="noreferrer"
                        >
                            90999 76321
                        </a>
                        <br />
                        <a
                            href="tel:9773195484"
                            target="_blank"
                            rel="noreferrer"
                        >
                            97731 95484
                        </a>
                    </div>
                </div>

                <div className="map__container">
                    <MapContainer />
                </div>
            </div>

            <div className="social__links">
                <span>
                    <a
                        href="https://github.com/arc-coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-github"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://gitlab.com/arc-coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-gitlab"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://linkedin.com/in/harshpatel2124"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-linkedin-in"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.instagram.com/arc__coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-instagram"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://dev.to/arc__coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-dev"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://twitter.com/arc__coder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-twitter"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.youtube.com/channel/UC5fLpNYfnyHYX7rvm1LYEyQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-youtube"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.freecodecamp.org/arccoder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-free-code-camp"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://www.facebook.com/harsh2124"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-facebook"></i>
                    </a>
                </span>
                <span>
                    <a
                        href="https://wa.me/919099976321?text=Hello%20I%20am%20interested%20to%20contact%20you."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i class="social_icons fab fa-whatsapp"></i>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default ContactUs;
