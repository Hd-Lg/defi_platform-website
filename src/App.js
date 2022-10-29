import React from "react";
import Featured from "./components/Featured";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Featured />
            <Signup />
            <Footer />
        </div>
    );
}
