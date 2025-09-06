import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Munisa Fatxullayeva",
    role: "Darajasi B2 kurs davomiyligi 3 oy",
    feedback:
      "Szni kursizda oqiganimdan juda ham mamanunman Bunaqa tez va oson organaman oylamagdim Siz bergan bilimlar va konikmalar.",
  },
  {
    id: 2,
    name: "Abdujalil Rahmatov",
    role: "Daraja C1 ( 6 oy davomida) ",
    feedback:
      "Ozim Universitetning oxirgi darajasida boʻlganligim tufayli, menga IELTS C1 darajasi kerak bolgan,  Magistraturaga topshirish uchun. Kop oʻquv markazlarga borgan man, lekin ular qisqa muddatda ololmaysz deb aytishgan . Xayritki szni kursingiz haqida malumot koʻrib qoldim va birinchi darsni oʻzidayoq szni dars oʻtish metodiz va oʻquvchilarga berayotgan bilimingiz menga juda yoqib qoldi . Sz tufayli qisqa vaqt ichida IELTSdan C1 darajasini qoʻlga kiritish nasib etti. Rahmat Miss Takhmina !",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonals"> 
      <h2 className="testimonials-title">Bizning talabalarimiz nima deydi</h2>
      <div className="testimonials-container">
        {testimonials.map((item) => (
          <div key={item.id} className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-feedback">{item.feedback}</p>
            <h3 className="testimonial-name">{item.name}</h3>
            <span className="testimonial-role">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
