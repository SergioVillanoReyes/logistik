import React from "react";
import Button from "./Button";

const BannerBottom = () => {
    return (
        <div className="banner-bottom-section">
            <div className="container-banner-bottom">
                <div className="banner-points">
                        <ul className="banner-points-text">
                            <li>Cloud Based WMS</li>
                            <li>Traceability</li>
                        </ul>
                        <ul className="banner-points-text">
                            <li>Reporting Platform</li>
                            <li>Freshness Guarantee</li>
                        </ul>
                </div>
                <div className="banner-info">
                    <p className="banner-info-text"><strong className="bigger">We specialize</strong> <br /> in high quality warehousing and fulfillment solutions, for a wide range of industries including food and beverage, health and beauty, consumer retail, and more.</p>
                    <Button type="button" typeOfBtn="secondary" text="See more" />
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;
