import React from "react";

import { MapContainer } from "./ContactUs/MapContainer";
import MyDetails from "./ContactUs/MyDetails";
import SocialLinks from "./ContactUs/SocialLinks";

const ContactUs = () => {
    return (
        <div className="contact_me__container" id="contactMe">
            <div className="contact__heading">
                <p>Get In Touch</p>
            </div>

            <div className="details__container">
                <MyDetails />

                <div className="map__container">
                    <MapContainer />
                </div>
            </div>

            <SocialLinks />
        </div>
    );
};

export default ContactUs;
