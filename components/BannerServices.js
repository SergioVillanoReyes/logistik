/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BannerServices = () => {
    const services = [
        {
            class: 'integrated-img',
            text: 'Integrated Distribution Services',
            route: '/integrated-distribution-services'
        },
        {
            class: 'ecommerce-img',
            text: 'Ecommerce Integrations',
            route: '/ecommerce-integrations'
        },
        {
            class: 'shipping-img',
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
                        {/* <img src={`/img/${s.img}`} alt=""/> */}
                        <div className={s.class}  />
                        <p className="text-banner">{s.text}</p>
                    </div>
                    </a>
                </Link>
                ))}
            </div>
        </div>
        <div className="banner-bottom" >
                <p className="text-banner-bottom">We help companies grow in the most unexpected ways</p>
        </div>
        </>
    );
};

export default BannerServices;
