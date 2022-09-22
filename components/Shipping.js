/* eslint-disable @next/next/no-img-element */
import React from "react";

const Shipping = () => {

    return (
        <div className="shipping">
            <div className="container-shipping">
                <div className="box-shipping">
                    <img src="/img/shipping.jpg" alt="shi" />
                </div>
                <div className="box-shipping">
                    <p className="title">SHIPPING</p>
                    <p className="text">We know that shipping isn&#39;t just about moving products—it&#39;s about managing risk and maximizing efficiency. With Logistik you&#39;ll get fast, reliable service at competitive prices so you can focus on what really matters: growing your business!</p>
                    <p className="text">We work with different carriers and offer: </p>
                    <p className="text">REAL-TIME SHIPPING RATES </p>
                    <p className="text">SHIP TO MORE CUSTOMERS IN MORE COUNTRIES </p>
                    <p className="text">DISCOUNTED SHIPPING RATES  </p>
                </div>
            </div>
        </div>
    );
};

export default Shipping;