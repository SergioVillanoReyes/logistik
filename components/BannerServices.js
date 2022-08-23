import React from "react";

const BannerServices = () => {
    const services = [
        {
            img: '1.png',
            text: 'Integrated Distribution Services',
        },
        {
            img: '2.png',
            text: 'Ecommerce Integrations',
        },
        {
            img: '3.png',
            text: 'Shipping',
        }
    ];
    return (
        <>
        <div className="banner-services">
            <div className="container-banner-services">
                {services.map((s, index)=> (
                <div key={index} className="box-services">
                    <img src={`/img/${s.img}`} alt="" />
                    <p className="text-banner">{s.text}</p>
                </div>
                ))}
            </div>
        </div>
        <div className="banner-bottom">
                <p className="text-banner-bottom">We help companies grow in the most unexpected ways</p>
        </div>
        </>
    );
};

export default BannerServices;
