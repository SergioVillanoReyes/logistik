import React from "react";
import Input from "./Form/Input";
import Button from "./Button";
import Textarea from "./Form/Textarea";

const ContactForm = () => {

    return (
        <div className="contact-form">
            <div className="container-contact-form">
                <p className="contact-title">CONTACT US</p>
                    <div className="form">
                        <Input placeholder="First Name"/>
                        <Input placeholder="Last Name" />
                        <Input placeholder="Email"/>
                        <Input placeholder="Phone Number" />
                    </div>
                    <div className="form-footer">
                        <Textarea placeholder="Message" />
                        <div className="form-send">
                            <Button text="SUBMIT" typeOfBtn="secondary" type="button" />
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default ContactForm;