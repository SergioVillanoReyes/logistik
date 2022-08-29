/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link';
import Button from "./Button";

const Contact = () => (
    <>
    <div className="pre-footer" id="contact">
            <div className="column">
                <div className="super-title">
                <strong>Got a<br /> service?</strong>
                 </div>
                 <div className="title">
                 Let us distribute it for you  
                 </div>
                 <div style={{ margin: '0rem 1rem' }}>
                 <Link href="/contact"><a><Button typeOfBtn="primary" text="Contact Us" /></a></Link>
                 </div>
            </div>
            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.909442350044!2d-118.16976868464359!3d33.994859728198996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cefa71e0db81%3A0x5d6878d0df564e00!2s5554%20Bandini%20Blvd%2C%20Bell%20Gardens%2C%20CA%2090201%2C%20USA!5e0!3m2!1sen!2smx!4v1647222883814!5m2!1sen!2smx" width="auto" height="450" style={{border:'none'}} allowFullScreen="" loading="lazy"></iframe>     
            </div>
    </div>
    </>
);

export default Contact;