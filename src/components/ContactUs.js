import React from "react";
import { MapContainer } from "./MapContainer";

const ContactUs = () => {
    return (
        <div className="contact_me__container" id="contactMe">
            <div className="contact__heading">Contact Us</div>

            <div className="details__container">
                <div className="my_details">
                    <div className="my_details__heading">Email address</div>
                    <a
                        href="mailto:dev@arccoder.in"
                        target="_blank"
                        rel="noreferrer"
                        className="my_details__data"
                    >
                        dev@arccoder.in
                    </a>
                    <div className="my_details__heading">Contact Number</div>
                    <a
                        href="tel:9099976321"
                        target="_blank"
                        rel="noreferrer"
                        className="my_details__data"
                    >
                        90999 76321
                    </a>
                    <div className="my_details__heading">WhatsApp Number</div>
                    <a
                        href="https://wa.me/919099976321?text=Hello%20I%20am%20interested%20to%20contact%20you."
                        target="_blank"
                        rel="noreferrer"
                        className="my_details__data"
                    >
                        90999 76321
                    </a>
                </div>
                <div className="map__container">
                    <MapContainer />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
