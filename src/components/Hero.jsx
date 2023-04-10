import React from "react";
import Button from "./Button";
import Pattern from "../assets/img/pattern-h.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img src={Pattern} alt={Pattern} />
        <div className="hero-content">
          <h1 className="hero-title">
            Create Amazing Digital Product For Your Business
          </h1>
          <p className="hero-text">
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
          <Button text="Get Started" className="btn-hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
