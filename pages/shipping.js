import React from "react";
import Layout from "../components/Layout";
import Hero from '../components/Hero';
import NavigationComponent from "../components/Navigation";

const Shipping = () => {
    const boxes = [
        {
            title: 'Real time shipping rates',
            bg: '/img/box-uno.jpg',
            flex: 'row'
        },
        {
            title: 'Ship to more customers in more countries',
            bg: '/img/box-dos.jpg',
            flex: 'row-reverse'
        },
        {
            title: 'Discounted shipping rates',
            bg: '/img/box-tres.jpg',
            flex: 'row'
        },
    ];

    return (
        <Layout>
            <div className="integrated">
                <p>
                    shipping
                </p>
                <div className="int-subtitle">
                 We know that shipping isn&#39;t just about
     moving products it&#39;s about managing risk and
     maximizing efficiency.<br />With Logistik you&#39;ll get
     fast, reliable service at competitive proces so
     you can focus on what really matters: growing 
     your business!
                </div>
                <br /><br />
                <div className="int-subtitle">We work with different carriers and offer</div>
            </div>
            <div className="shipping">
                {boxes.map((b, index) => (
                    <div key={index} className="box" style={{ flexDirection: b.flex}}>
                        <p style={{ textAlign: b.flex === 'row-reverse' && 'right'}}>{b.title}</p>
                        <div className="img" style={{ backgroundImage: `url('${b.bg}')`}} />
                    </div>
                ))}
            </div>
            {/* <NavigationComponent bg="bg-shipp.png" currentSection="shipping"/> */}
        </Layout>
    );
};

export default Shipping;