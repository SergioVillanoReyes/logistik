import React from "react";

const Textarea = ({
    label,
    className,
    placeholder,
}) => {

    return (
        <div className="container-input">
            <label className={`label-${className}`}>
                <strong>{label}</strong>
                <textarea
                    className={`${className || 'input'}`}
                    placeholder={placeholder}
                    rows={6}
                >
                </textarea>
            </label>
        </div>
    )
};

export default Textarea;