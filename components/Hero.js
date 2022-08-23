import React from 'react';

const Hero = ({
    title,
    bg,
}) => {

return (
<div className='hero' style={{ backgroundImage: `url('/img/${bg}.jpg')` }}>
    <div className='hero-bg'>
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