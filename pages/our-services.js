import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Ecommerce from '../components/Ecommerce';
import Shipping from '../components/Shipping';

const OurServices = () => {

    return (
        <Layout>
            <Hero 
                title="OUR SERVICES"
                bg="bg-services"
            />
            <Services />
            <Ecommerce />
            <Shipping />
        </Layout>
    )

};

export default OurServices;