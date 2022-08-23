import React from "react";
import Input from "./Form/Input";
import Button from "./Button";

const ContactForm = () => {

    return (
        <div className="contact-form">
            <div className="container-contact-form">
                <p className="title">CONTACT US</p>
                <form>
                    <Input 
                        label="First Name"
                    />
                    <Input 
                        label="Last Name"
                    />
                    <Input 
                        label="Email"
                    />
                    <Input 
                        label="Phone Number"
                    />
                    <Input 
                        label="Message"
                    />
                    <Button 
                        text="SEND"
                        typeOfBtn="primary"
                        type="button"
                    />
                </form>
            </div>
        </div>
    )
};

export default ContactForm;