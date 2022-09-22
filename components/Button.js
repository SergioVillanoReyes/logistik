/* eslint-disable @next/next/no-img-element */
import React from 'react';


const Button = ({
    text,
    typeOfBtn,
    type = 'button',
    icon = ""
}) => {

    return (
<>
        <button
        type={type}
        className={`btn btn-${typeOfBtn}`}
        >
            {icon !== "" && (
                <img src={`/img/${icon}.png`} alt='icon' />
            )}
            {text}
        </button>
</>
    );
};

export default Button;