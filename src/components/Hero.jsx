import React from "react";
import "./Hero.css";

import Crypto from "../assets/hero-img.png";

export default function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <p> Buy & Sell Crypto 24/7 using your retirement account</p>
                <h1>Invest in Cryptocurrencies with your IRA</h1>
                <p>Buy, Sell and store hundreds of cryptocurrencies</p>
                <input type={"email"} placeholder="Enter your email" />
            </div>

            <div className="right">
                <img src={Crypto} alt="banner" />
            </div>
        </div>
    );
}
