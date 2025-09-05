import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">tahmina<span>xon</span></div>

        {/* Desktop menu */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#about">loyihalar</a>
          <a href="#courses">kurslar</a>
          <a href="#about">biz haqimizda</a>
          <a href="#blog">blog</a>
        </nav>

        {/* Contact button */}
        <a href="#contact" className="contact-btn">
          bog'lanish
        </a>

        {/* Mobile toggle */}
        <div className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
