import React from "react";
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import NavigationComponent from "../components/Navigation";

const IntegratedServices = () => {
    const texts = [
        {
            title: 'Case & Layer Picking',
            bg: '/img/int1.jpg',
            description: 'Ship and sell any type of configuration, we will take care of all your order specific requirements.',    
        },
        {
            title: 'Traceability Reporting',
            bg: '/img/int2.jpg',
            description: 'Our technology allows you to trace your inventory in real time, review expiration, lot, etc.',
        },
        {
            title: 'Retail Display Building',
            bg: '/img/int3.png',
            description: 'Our demand display assembling.',
        },
        {
            title: 'Cross-Docking',
            bg: '/img/int4.jpg',
            description: 'Our cross-docking programs ensure smooth deliveries.',
        },
        {
            title: 'Bulk/Rate Storage',
            bg: '/img/int5.jpg',
            description: 'We offer both bulk and racked storage zones.',
        },
        {
            title: 'Lot Code & Expiration Date Tracking',
            bg: '/img/int6.jpg',
            description: 'Lot expiration data is recorded upon receipt in order to allocate product FIFO or FEFO ensuring proper rotation',
        },
        {
            title: 'Kitting & Labeling',
            bg: '/img/int7.jpg',
            description: 'We offer variety for your retail and marketing programs.',
        },
        {
            title: 'Routing Guide Management',
            bg: '/img/int8.jpg',
            description: 'Helping you comply with individual retailer requirements and guidelines ensuring a streamlined process.',
        },
        {
            description: 'Targets timely prevention and monitoring of destructive pests during product arrival and storage.',
            title: 'Integrated Pest Management',
            bg: '/img/24.png',
        }
    ];

    return (
        <Layout>
            <div className="integrated">
                <p>
                    integrated distribution services
                </p>
            </div>
            <div className="int-box">
                <div className="int-info">
                    <p>
                    From a single warehouse to a global supply chain, we have the expertice and experience to handle your distribution needs.
                    <br />
                    We make sure that we inderstand your business goals and that we provide real-time solutions, so you can track your inventory every step of the way.
                    </p>
                    <button className="btn btn-alternative">
                        See more
                    </button>
                </div>
                <div className="int-boxes">
                    {texts.map((t, index)=> (
                    <div key={index} className="box">
                            <div className="img" style={{backgroundImage:`url(${t.bg})`}}/>
                            <p className="title-int">
                                {t.title}
                            </p>
                            <p className="text-int">
                                {t.description}
                            </p>
                    </div>
                    ))}
                </div>
            </div>
            {/* <NavigationComponent bg="bg-bottom.png" currentSection="integrated-distribution-services" /> */}
        </Layout>
    );
};

export default IntegratedServices;