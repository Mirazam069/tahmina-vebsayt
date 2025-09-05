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
    name: "Emily Johnson",
    role: "Student (IELTS Preparation)",
    feedback:
      "This course helped me achieve my IELTS target score. The practice sessions were very useful and I appreciated the individual attention I received from the instructors. Highly recommended for serious learners.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Beginner Student (A1 Level)",
    feedback:
      "At first, I was nervous because I had never studied English before. But the friendly atmosphere and step-by-step lessons made me feel comfortable. Now I can introduce myself and talk about daily life easily.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What Our Students Say</h2>
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
