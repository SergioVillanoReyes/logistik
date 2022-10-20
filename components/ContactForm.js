import React, { useState } from "react";
import Input from "./Form/Input";
import Button from "./Button";
import Textarea from "./Form/Textarea";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_PATH = 'https://logistik-solutions.com/sendemail.php';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        last_name: '',
        email: '',
        phone: '',
        message: '',
        error: null
    });

    const handleForm = (e)=> {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = () => {
        axios({
            method: 'post',
            url: `${API_PATH}`,
            headers: { 'content-type': 'application/json' },
            data: form
          })
            .then(result => {
                if (result.data.sent){
                    toast.success("Email sent successfully, we will contact you soon");
                    setForm({
                        name: '',
                        last_name: '',
                        email: '',
                        phone: '',
                        message: '',
                        error: null
                    });
                }
            })
            .catch(error => {
                toast.warn(error.message, 'warning');
                setForm({ error: error.message })
            });
    };

    return (
        <div className="contact-form" >
            <div className="container-contact-form">
            <ToastContainer />
                <p className="contact-title">CONTACT US</p>
                    <div className="form">
                        <Input 
                        id="name" 
                        onChange={(e) => handleForm(e)} 
                        name="name" 
                        placeholder="First Name"
                        value={form.name}
                        />
                        <Input 
                        id="last_name" 
                        onChange={(e) => handleForm(e)} 
                        name="last_name" 
                        placeholder="Last Name" 
                        value={form.last_name}
                        />
                        <Input 
                        id="email"
                        onChange={(e) => handleForm(e)} 
                        name="email" 
                        placeholder="Email"
                        value={form.email}
                        />
                        <Input 
                        id="phone" 
                        onChange={(e) => handleForm(e)} 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={form.phone}
                        />
                    </div>
                    <div className="form-footer">
                        <Textarea 
                        id="message" 
                        onChange={(e) => handleForm(e)} 
                        name="message" 
                        placeholder="Message" 
                        value={form.message}
                        />
                        <div className="form-send">
                            <Button type="submit" onClick={(e) => handleFormSubmit(e)} text="SUBMIT" typeOfBtn="secondary" />
                        </div>
                    </div>
            </div>
        </div>
    )
};

export default ContactForm;