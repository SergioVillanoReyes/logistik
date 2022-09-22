/* eslint-disable @next/next/no-img-element */
import React from "react";

const IconsServices = () => {

    const services = [
        {
            title: 'Case & Layer Picking',
            info: 'ship and sell any type of configuration, we will take care of all your order specific requirements',
        },
        {
            title: 'Traceability Reporting',
            info: 'our technology allows you to trace your inventory in real time, review expiration, lot, etc.',
        },
        {
            title: 'Retail Display Buidling',
            info: 'on demand display assembling.',
        },
        {
            title: 'Cross-Docking',
            info: 'our cross-docking programs ensure smooth deliveries.',
        },
        {
            title: 'Bulk/Rate Storage',
            info: 'we offer both bulk and racked storage zoness.',
        },
        {
            title: 'Lot Code & Expiration Date Tracking',
            info: 'lot expiration data is recorded upon receipt in order to allocate product FIFO or FEFO ensuring proper rotation.',
        },
        {
            title: 'Kitting & Labeling',
            info: 'we offer variety for your retail and marketing programs.',
        },
        {
            title: 'Routing Guide Management',
            info: 'helping you comply with individual retailer requirements and guidelines ensuring a streamlined process.',
        },
        {
            title: 'Integrated Pest Management',
            info: 'targets timely prevention and monitoring of destructive pests during product arrival and storage.',
        },
    ];

    return (
        <div className="icons-services">
            <div className="container-icons">
                {services.map((s, index) => (
                    <div key={index} className="icon">
                        <img src={`/img/delivery-package.svg`} alt="icon" />
                        <p className="sub-title">
                            {s.title}
                        </p>
                        <p className="text">
                            {s.info}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default IconsServices;