import React from 'react';

const Hero = ({
    title,
    bg,
    half = false,
}) => {

return (
<div className='hero' style={{ backgroundImage: `url('/img/${bg}.jpg')` }}>
    <div className={`hero-bg ${half ? 'half' : 'complete'}`}>
        <div className='container-hero'>
            <div className='hero-title'>
            {title}
            </div>
        </div>
    </div>
</div>
    );
};

export default Hero;