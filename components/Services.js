/* eslint-disable @next/next/no-img-element */
import React from "react";

const Services = () => {

    return (
        <div className="services-section">
            <div className="container-services">
                <div className="service-box">
                    <p className="title">
                        INTEGRATED DISTRIBUTION SERVICES 
                    </p>
                </div>
                <div className="service-box">
                    <p className="sub-title">
                        From a single warehouse to a global supply chain, we have the expertise and experience to handle your distribution needs. We make sure that we understand your business goals and that we provide real-time solutions, so you can track your inventory every step of the way. 
                    </p>
                </div>
            </div>
            <img src="/img/ecommerce.png" alt="icon" className="central-image"/>
        </div>
    );
};

export default Services;