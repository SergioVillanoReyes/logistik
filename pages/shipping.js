import React from "react";
import Layout from "../components/Layout";
import Hero from '../components/Hero';

const Shipping = () => {
    const boxes = [
        {
            title: 'Real Time Shipping Rates',
            bg: '/img/box-uno.jpg',
        },
        {
            title: 'Ship to more customers in more countries',
            bg: '/img/box-dos.jpg',
        },
        {
            title: 'Discounted shipping rates',
            bg: '/img/box-tres.jpg',
        },
    ];

    return (
        <Layout>
            <Hero 
                title="SHIPPING"
                bg="bg-shipping"
            />
            <div className="shipping">
            <div className="box-text">
                    <p>
                    We know that shipping isn't just about
                    moving products it's about managing risk and
                    maximizing efficiency.With Logistik you'll get
                    fast, reliable service at competitive proces so
                    you can focus on what really matters: growing 
                    your business!
                    </p>
                    <p className="bold">We work with different carriers and offer</p>
                </div>
                {boxes.map((b, index) => (
                    <div key={index} className="box" style={{ backgroundImage: `url('${b.bg}')`}}>
                        <p>
                            {b.title}
                        </p>
                        <div className="container-btn">
                            <div className="btn-close" />
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Shipping;