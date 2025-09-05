import React from "react";
import "./Hero.css";
import heroBanner from "../assets/header-banner.png";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Fon rangli blur elementlar */}
      <div className="hero-bg-item orange"></div>
      <div className="hero-bg-item yellow"></div>

      {/* Kontent */}
      <div className="hero-inner">
        <div className="light"></div>
        <img src={heroBanner} alt="Hero Banner" className="hero-banner" />
        <h1 className="hero-title">
          <div className="line">Tahmina Usmonova</div>

          <div className="line middle-line">
            <span className="word">IELTS va CEFR</span>
            <span className="arrow-wrap">
              <svg
                viewBox="0 0 24 24"
                className="arrow-svg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12h12M12 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="word outline">Instruktori</span>
          </div>

          <div className="line">Teacher</div>
        </h1>
      </div>
    </section>
  );
}
