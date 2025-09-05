import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { FaLightbulb, FaCode, FaRocket } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target); // faqat bir marta trigger
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`about-section ${visible ? "visible" : ""}`}
      id="about"
    >
      {/* Dekor elementlar */}
      <div className="grid-overlay"></div>
      <div className="sparks"></div>

      {/* Kontent */}
      <h2 className="about-title">Tahmina Usmonova kim?</h2>
      <p className="about-description">
        Assalomu alaykum! Mening ismim Tahmina. Men ingliz tili
        o‘qituvchisiman va bu sohada bir necha yillik tajribaga egaman. Shu vaqt
        mobaynida 300 dan ortiq o‘quvchini ingliz tilida erkin gapira olish,
        grammatikani tushunish hamda imtihonlarga tayyorlashga yordam berdim.
        Men IELTS 7.0 sertifikatiga egaman va shu tajriba orqali o‘quvchilarga
        samarali strategiyalarni, foydali uslublarni o‘rgataman. Mening
        darslarim qiziqarli, interaktiv va har bir o‘quvchining shaxsiy
        maqsadiga moslashtirilgan. Yo‘nalishlarim: Umumiy ingliz tili (o‘qish,
        tinglash, yozish, gapirish) Grammatikani mukammal o‘zlashtirish So‘z
        boyligini oshirish IELTS imtihoniga tayyorlash Suhbat (Speaking)
        mashqlari O‘quvchilarga bergan va’dam: Mening asosiy maqsadim — ingliz
        tilini o‘rganishni soddalashtirish, qiziqarli qilish va natijaga
        erishish. Men har bir o‘quvchining qobiliyatiga ishonaman va to‘g‘ri
        yo‘l-yo‘riq ko‘rsatib, ularga o‘z kuchiga ishonch hosil qilishga yordam
        beraman. Ingliz tilini o‘rganishni istasangiz, men sizga
        bosqichma-bosqich, aniq reja asosida yordam berishga tayyorman.
      </p>

      <ul className="about-list">
        <li>
          <FaLightbulb className="about-icon" /> Qiziqarli darslar  
        </li>
        <li>
          <FaCode className="about-icon" />  Qisqa muddatda ajoyib natijalar 
        </li>
        <li>
          <FaRocket className="about-icon" /> Mutaxassisdan puxta tuzilgan darsliklar 
        </li>
      </ul>

      <a href="#portfolio" className="about-btn">
        Ko'proq bilish
      </a>
    </section>
  );
}
