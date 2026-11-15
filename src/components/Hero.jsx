import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-brand">
          <span className="brand-line"></span>
          <span className="hero-tag">MIRACLE SCISSORS</span>
          <span className="brand-line"></span>
        </div>

        <h1>
          YOUR STYLE,
          <br />
          YOUR SIGNATURE.
        </h1>

        <p className="hero-quote">Where Style Meets Its Masterpiece</p>

        <button className="hero-primary">
          Explore Services
          <span> →</span>
        </button>
      </div>
    </section>
  );
}

export default Hero;
