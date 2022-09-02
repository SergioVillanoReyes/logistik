import React from 'react';
import Link from 'next/link';
import Input from '../Form/Input';
import Button from '../Button';
import Textarea from '../Form/Textarea';
import Contact from '../Contact';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='section-footer'>
                    <div>
                        <img src='/img/logo.png' alt='' className='logo-footer' />
                        <div className='social-media'>
                            <Link href="https://www.facebook.com/profile.php?id=100083636940949">
                                <a target="_blank">
                                    <img src='/img/facebook.png' alt='social' />
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/logistik_solutions_/">
                                <a target="_blank">
                                    <img src='/img/twitter.png' alt='social' />
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/company/logistik-solutions/">
                                <a target="_blank">
                                    <img src='/img/linkedin.png' alt='social' />
                                </a>
                            </Link>
                        </div>
                    </div>
                        <div className='section-footer-right'>
                            <div className='contact-info'>
                            <p className='sub-title'>
                            Get in touch
                            </p>
                                <p className='text'>
                                +1.323.916.4096<br/>
                                contact@logistik.com
                                </p>
                            </div>
                            <div className='contact-info'>
                            <p className='sub-title'>
                            Asistance Hours
                            </p>
                                <p className='text'>
                                Monday - Friday<br/>
                                8am to 5pm PST
                                </p>
                            </div>
                            <div className='contact-info'>
                            <p className='sub-title'>
                            Office Address
                            </p>
                                <p className='text'>
                                5530 Bandini Blvd.<br/>
                                Bell Gardens, CA 90201 
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;