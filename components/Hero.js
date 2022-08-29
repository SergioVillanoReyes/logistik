import React, {useEffect, useState} from 'react';

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
        'bg-hero',
        'bg-integrated',
        'bg-services',
        'bg-shipping'
    ];

    useEffect(()=> {
        setNum(num +1);
        if(num === 3){
            setNum(0);
        }
        setCurrentImg(img[num]);
    },[refresh]);

    setTimeout(() => {
        setRefresh(!refresh);
    }, 6000);


return (
<div 
    className={`hero ${half ? 'half' : 'complete'} ${refresh ? 'anim1' : 'anim2'}`} 
    style={{ backgroundImage: carousel ? `url('/img/carousel/${currentImg}.jpg')` : `url('/img/${bg}.jpg')` }}
>
    <div className={`hero-bg ${half ? 'half-bg' : 'complete-bg'}`}>
        <div className={`container-hero ${half ? 'hero-bg-half' : 'hero-bg-compl'}`}>
            <div className='hero-title'>
            {title}
            </div>
        </div>
    </div>
</div>
    );
};

export default Hero;