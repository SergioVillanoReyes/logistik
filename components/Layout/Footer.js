import React from 'react';
import Link from 'next/link';
import Input from '../Form/Input';
import Button from '../Button';
import Textarea from '../Form/Textarea';

const Footer = () => {

    return (
        <div className='footer'>
            <div className='container-footer'>
                <div className='section-footer'>
                    <div>
                        <img src='/img/logo.png' alt='' className='' />
                        <div className='social-media'>
                            <Link href="">
                                <a>
                                    <img src='/img/facebook.png' alt='social' />
                                </a>
                            </Link>
                            <Link href="">
                                <a>
                                    <img src='/img/twitter.png' alt='social' />
                                </a>
                            </Link>
                            <Link href="">
                                <a>
                                    <img src='/img/linkedin.png' alt='social' />
                                </a>
                            </Link>
                        </div>
                    </div>
                        <div className='section-footer-right'>
                            <p className='sub-title'>
                                CONTACT US
                            </p>
                            <p className='text'>
                            5530 BANDINI BLVD.
                            </p>
                            <p className='text'>
                            BELL GARDENS, CA 90201 
                            </p>
                            <p className='text'>
                            <strong>323.916.4096 </strong>
                            </p>
                        </div>
                </div>
                <div className='section-footer-form'>
                    <form>
                        <div className='row'>
                            <Input className="input-secondary" placeholder="First Name" />
                            <Input className="input-secondary" placeholder="Last Name" />
                        </div>
                        <div className='row'>
                            <Input className="input-secondary" placeholder="First Name" />
                            <Input className="input-secondary" placeholder="Last Name" />
                        </div>
                        <div className='row'>
                            <Textarea className="textarea-secondary" placeholder="Message"/>
                        </div>
                        <div className='row-right'>
                            <Button typeOfBtn="secondary" type="submit" text="SUBMIT" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;