import React from "react";

const MyDetails = () => {
    return (
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
                <a href="tel:9099976321" target="_blank" rel="noreferrer">
                    90999 76321
                </a>
                <br />
                <a href="tel:9773195484" target="_blank" rel="noreferrer">
                    97731 95484
                </a>
            </div>
        </div>
    );
};

export default MyDetails;
