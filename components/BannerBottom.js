import React from "react";
import Link from "next/link";
import Button from "./Button";

const BannerBottom = () => {
    return (
        <div className="banner-bottom-section">
            <div className="container-banner-bottom">
                <div className="allbrands">
<div className="slider brands">
	<div className="slide-track">
		<div className="slide">
                <p>Cloud Based WMS</p>
		</div>
        <div className="slide">
                <p>Traceability</p>
		</div>
        <div className="slide">
                <p>Reporting Platform</p>
		</div>
        <div className="slide">
                <p>Freshness Guarantee</p>
		</div>
        <div className="slide">
                <p>Cloud Based WMS</p>
		</div>
        <div className="slide">
                <p>Traceability</p>
		</div>
        <div className="slide">
                <p>Reporting Platform</p>
		</div>
        <div className="slide">
                <p>Freshness Guarantee</p>
		</div>
        <div className="slide">
                <p>Cloud Based WMS</p>
		</div>
        <div className="slide">
                <p>Traceability</p>
		</div>
        <div className="slide">
                <p>Reporting Platform</p>
		</div>
        <div className="slide">
                <p>Freshness Guarantee</p>
		</div>
        <div className="slide">
                <p>Cloud Based WMS</p>
		</div>
        <div className="slide">
                <p>Traceability</p>
		</div>
        <div className="slide">
                <p>Reporting Platform</p>
		</div>
        <div className="slide">
                <p>Freshness Guarantee</p>
		</div>
	</div>
</div>
</div>
                <div className="banner-info">
                    <p className="banner-info-text"><strong className="bigger">We specialize</strong> <br /> in high quality warehousing and fulfillment solutions, for a wide range of industries including food and beverage, health and beauty, consumer retail, and more.</p>
                    <Link href="/integrated-distribution-services">
                        <a>
                    <Button type="button" typeOfBtn="secondary" text="See more" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;
