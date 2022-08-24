import React from "react";
import Link from "next/link";

const BannerServices = () => {
    const services = [
        {
            img: '1.png',
            text: 'Integrated Distribution Services',
            route: '/integrated-distribution-services'
        },
        {
            img: '2.png',
            text: 'Ecommerce Integrations',
            route: '/ecommerce-integrations'
        },
        {
            img: '3.png',
            text: 'Shipping',
            route: '/shipping'
        }
    ];
    return (
        <>
        <div className="banner-services">
            <div className="container-banner-services">
                {services.map((s, index)=> (
                <Link href={s.route} key={index}>
                    <a className="box-services">
                    <div>
                        <img src={`/img/${s.img}`} alt="" />
                        <p className="text-banner">{s.text}</p>
                    </div>
                    </a>
                </Link>
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
