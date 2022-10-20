import React from "react";

const Input = ({
    label,
    className,
    placeholder,
    onChange,
    name,
    value,
}) => {

    return (
        <div className="container-input">
            <label className={`label-${className}`}>
                <strong>{label}</strong>
                <input
                  className={`${className || 'input'}`}
                  placeholder={placeholder}
                  name={name}
                  onChange={onChange}
                  value={value}
                />
            </label>
        </div>
    )
};

export default Input;