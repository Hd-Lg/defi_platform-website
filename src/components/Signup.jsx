import React from "react";
import Trade from "../assets/trade.png";
import "./Signup.css";

export default function Signup() {
    return (
        <div className="signup">
            <div className="container">
                <div className="left">
                    <img src={Trade} alt="phone" />
                </div>
                <div className="right">
                    <h2>Earn passive income with crypto</h2>
                    <p>Earn up to 12% annual rewards on 30+ digital assets.</p>
                    <input type={"email"} placeholder="Enter your email" />
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </div>
    );
}
