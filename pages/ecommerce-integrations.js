import React from "react";
import Layout from '../components/Layout';
import Hero from "../components/Hero";
import NavigationComponent from "../components/Navigation";

const EcommerceInt = () => {
    const ecomm = [
        {
            title: 'Web Base Inventory & Order Monitoring',
            img: '/img/ecomm-uno.png',
        },
        {
            title: 'Pic & Pac',
            img: '/img/ecomm-dos.png',
        },
        {
            title: 'Kitting & Bundling',
            img: '/img/ecomm-tres.png',
        },
        {
            title: 'Personalized Packaging Services',
            img: '/img/ecomm-cuatro.png',
        },
        {
            title: 'Re-Labeling & Barcoding',
            img: '/img/ecomm-cinco.png',
        },
        {
            title: 'Return Management',
            img: '/img/ecomm-seis.png',
        },
    ];

    return (
        <Layout>
            <Hero 
                title="ECOMMERCE INTEGRATIONS"
            />
            <div className="ecommerce-int">
            <div className="box-text">
                    <p>
                   We work and integrate with the most popular ecommerce platforms.
                    </p>
                    <p className="bold">Ecommerce &amp; Fullfilment</p>
                    <div className="box-ecommerce">
                        {ecomm.map((e, index) => (
                        <div  key={index} className="box-e">
                            <img src={e.img} alt="logistik" />
                            <p>{e.title}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <NavigationComponent currentSection="ecommerce-integrations" />
        </Layout>
    );
};

export default EcommerceInt;
