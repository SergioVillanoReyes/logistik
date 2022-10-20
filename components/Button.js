/* eslint-disable @next/next/no-img-element */
import React from 'react';


const Button = ({
    text,
    typeOfBtn,
    type = 'button',
    icon = "",
    onClick,
}) => {

    return (
<>
        <button
        type={type}
        className={`btn btn-${typeOfBtn}`}
        onClick={onClick}
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