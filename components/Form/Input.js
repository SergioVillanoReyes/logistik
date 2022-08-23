import React from "react";

const Input = ({
    label,
    className,
    placeholder,
}) => {

    return (
        <div className="container-input">
            <label className={`label-${className}`}>
                <strong>{label}</strong>
                <input
                  className={`${className || 'input'}`}
                  placeholder={placeholder}
                />
            </label>
        </div>
    )
};

export default Input;