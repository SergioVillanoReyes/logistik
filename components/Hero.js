import React, {useEffect, useState} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Hero = ({
    title,
    bg,
    half = false,
    carousel = false,
}) => {
    const [currentImg, setCurrentImg] = useState('bg-hero');
    const [refresh, setRefresh] = useState(false);
    const [num , setNum] = useState(0);

    const img = [
        'bg-hero.jpg',
        'home.png',
        'home2.png',
        'bg-shipping.jpg'
    ];


return (
    <>
    <div className="space-texts">
            {title !== 'SOLUTIONS WITH FREEDOM BUILT IN' ? (
                    <div className='hero-title'>
                            {title}
                    </div>
            ):(
                 <>
                        <p  style={{marginTop: '20vh'}}>
                                SOLUTIONS 
                                <span className="center-flex">
                                <small>WITH</small>
                                <span className="column">
                                <span className="freedom">FREEDOM</span>
                                <span className="built"> BUILT IN</span>
                                </span>
                                </span>
                        </p>
                </>
            )}
    </div>
    {carousel ? (
    <Slide responsive cssClass={`hero ${half ? 'half' : 'complete'} ${refresh ? 'anim1' : 'anim2'}`} arrows={false} duration={4500}>
        {img.map((i, index) => (
        <div 
            key={index}
            className="contain-slider"
            style={{ backgroundImage: carousel ? `url('/img/carousel/${i}')` : `url('/img/${bg}.jpg')` }}
        >
            {/* <div className={`hero-bg ${half ? 'half-bg' : 'complete-bg'}`}> */}
            <div>
                <div className={`container-hero ${half ? 'hero-bg-half' : 'hero-bg-compl'}`} >
                </div>
            </div>
        </div>
        ))}
    </Slide>
    ):(
        <div className={`hero ${half ? 'half' : 'complete'} ${refresh ? 'anim1' : 'anim2'}`}>
        <div 
            className="contain-slider"
            style={{ backgroundImage: carousel ? `` : `url('/img/${bg}.jpg')` }}
        >
            <div className={`hero-bg ${half ? 'half-bg' : 'complete-bg'}`}>
                <div className={`container-hero ${half ? 'hero-bg-half' : 'hero-bg-compl'}`} >
                </div>
            </div>
        </div>
    </div>
    )}
    </>
    );
};

export default Hero;