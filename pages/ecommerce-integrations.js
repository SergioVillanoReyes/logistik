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
            <div className="integrated">
                <p>
                    ecommerce integrations
                </p>
            </div>
                <div className="ecommerce-int">
                    <div className="ecomm-texts">
                        <p className="ecomm-text">
                            We work and integrate with the <br />most popular ecommerce platforms
                        </p>
                        <p className="ecomm-title">
                            Ecommerce & Fulfillment
                        </p>
                    </div>
                    <div className="ecomm-circles">
                        {ecomm.map((e, index) => (
                            <div key={index}  className="circle">
                                <div className="circle-img" style={{backgroundImage:`url(${e.img})`}} />
                                <p className="circle-text">{e.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            {/* <NavigationComponent bg="bg-ecc.png" currentSection="ecommerce-integrations" /> */}
        </Layout>
    );
};

export default EcommerceInt;
