import React from "react";
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const IntegratedServices = () => {
    const texts = [
        {
            title: 'Case & Layer Picking',
            description: 'Ship and sell any type of configuration, we will take care of all your order specific requirements.',    
        },
        {
            title: 'Traceability Reporting',
            description: 'Our technology allows you to trace your inventory in real time, review expiration, lot, etc.',
        },
        {
            title: 'Retail Display Building',
            description: 'Our demand display assembling.',
        },
        {
            title: 'Cross-Docking',
            description: 'Our cross-docking programs ensure smooth deliveries.',
        },
        {
            title: 'Bulk/Rate Storage',
            description: 'We offer both bulk and racked storage zones.',
        },
        {
            title: 'Lot Code & Expiration Date Tracking',
            description: 'Lot expiration data is recorded upon receipt in order to allocate product FIFO or FEFO ensuring proper rotation',
        },
        {
            title: 'Kitting & Labeling',
            description: 'We offer variety for your retail and marketing programs.',
        },
        {
            title: 'Routing Guide Management',
            description: 'Helping you comply with individual retailer requirements and guidelines ensuring a streamlined process.',
        },
        {
            description: 'Targets timely prevention and monitoring of destructive pests during product arrival and storage.',
            title: 'Integrated Pest Management',
        }
    ];

    return (
        <Layout>
            <Hero 
                title="INTEGRATED DISTRIBUTION SERVICES"
                bg="bg-integrated"
            />
            <div className="integrated">
                <div className="box-text">
                    <p>
                    From a single warehouse to a global supply chain, we
                    have the expertice and experience to handle your
                    distribution needs.We make sure that we inderstand
                    your business goals and that we provice real-time
                    solutions, so you can track your inventory every step
                    of the way.
                    </p>
                </div>
                    {texts.map((t, index) =>(
                        <div key={index} className="points">
                            <div className="title-points">
                                <p>
                                    {t.title}
                                </p>
                            </div>
                            <div className="title-description">
                                <p>
                                    {t.description}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
                <div className="img-bottom" >
            <div style={{backgroundColor: 'rgba(0, 0, 0, 0.548)', width: '100%', height: '100vh'}} />
            </div>
        </Layout>
    );
};

export default IntegratedServices;