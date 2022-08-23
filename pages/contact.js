import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    return (
        <Layout>
            <Hero 
                title="CONTACT"
                bg="bg-contact"
            />
            <Map />
            <ContactForm />
        </Layout>
    )
};

export default Contact;