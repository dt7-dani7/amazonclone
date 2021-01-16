import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/JanART/Teaser1/Common/pc/Prime_PC_164_English3-Months.jpg" 
                alt=""/>
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    {/** */}
                    {/** */}
                    {/** */}
                    {/** */}
                    {/** */}
                </div>
            </div>
            <div className="checkout_right">
               <Subtotal/>
               
            </div>
        </div>
    )
}

export default Checkout
