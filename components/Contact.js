/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from 'next/link';
import Button from "./Button";

const Contact = () => (
    <>
    <div className="pre-footer" id="contact">
            <div className="column">
                <div className="super-title">
                <strong> Looking for solutions? 
                 </strong>
                    <br />
                    <p>
                    Let&#39;s Talk.
                    </p>
                 </div>
                 <br />
                 <hr style={{marginTop: '50px'}}/>
                 <div className="pre-btn" style={{ display: 'flex', justifyContent: 'end', marginTop: '20px', marginBottom: '2rem' }}>
                 <Link href="/contact"><a><Button typeOfBtn="primary" text="CONTACT US" /></a></Link>
                 </div>
            </div>
            <div className="map">    
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6615.789662533973!2d-118.167466!3d33.995235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cefa7b59808f%3A0x786aa77e49499214!2s5530%20Bandini%20Blvd%2C%20Bell%2C%20CA%2090201%2C%20USA!5e0!3m2!1sen!2smx!4v1666241538144!5m2!1sen!2smx" width="auto" height="500" style={{border:'none'}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
    </>
);

export default Contact;