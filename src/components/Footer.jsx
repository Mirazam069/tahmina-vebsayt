import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        © {new Date().getFullYear()} TaxminaTeacher. The best teacher.
      </p>

      <div className="footer-socials">
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/takhmina_english?igsh=MXBtejNodzNjZ2hwMQ=="
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a href="https://t.me/tahminasengliw" target="_blank" rel="noreferrer">
          <FaTelegram />
        </a>
      </div>
    </footer>
  );
}
