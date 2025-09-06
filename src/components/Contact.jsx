import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaTelegramPlane  } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-heading">Bog'lanish</h2>
      <p className="contact-subtext">
        O'z ma'lumotlaringizni yozib qoldiring Tahmina Usmonova shaxsan siz bilan bo'g'lanadi 
      </p>

      <div className="contact-box">
        {/* Info icons (optional) */}
        <div className="contact-info">
          <div><FaMapMarkerAlt />O'zbekistan, Toshkent, Mirzo Ulug'bek, Feruza 2</div>
          <div><FaPhoneAlt /> +998 94 641 09 21</div>
          <div><FaTelegramPlane  /> @takh_usman</div>
        </div>

        {/* Center form */}
        <form className="contact-form">
          <input type="text" placeholder="Ism" required />
          <input type="email" placeholder="Raqamingiz" required />
          <textarea placeholder="Qanday savolingiz mavjud" rows="5" required></textarea>
          <a href="https://t.me/takh_usman" target="_blank" rel="noopener noreferrer" >
  <button type="button" className="send-btn">Xabarni yuborish</button>
</a>
        </form>
      </div>
    </section>
  );
}
