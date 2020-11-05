import React from "react";
import { MapContainer } from "./MapContainer";

const ContactUs = () => {
    return (
        <div className="contact_me__container" id="contactMe">
            <div className="contact__heading">Contact Us</div>
            <div className="map__container">
                <MapContainer />
            </div>
        </div>
    );
};

export default ContactUs;
