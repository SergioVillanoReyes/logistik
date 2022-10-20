import React from "react";

const Textarea = ({
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
                <textarea
                    className={`${className || 'input'}`}
                    placeholder={placeholder}
                    rows={6}
                    name={name}
                    onChange={onChange}
                    value={value}
                >
                </textarea>
            </label>
        </div>
    )
};

export default Textarea;