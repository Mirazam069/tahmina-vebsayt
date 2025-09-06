import React from "react";
import "./Courses.css";
import Photo11 from "../assets/photo11.jpg";
import Photo12 from "../assets/photo12.jpg";
import Photo13 from "../assets/photo13.jpg";


const coursesData = [
  {
    category: "Beginner Levels",
    image: Photo11,
    items: ["A1 - Starter", "A2 - Elementary"],
  },
  {
    category: "Intermediate Levels",
    image: Photo12,
    items: ["B1 - Pre-Intermediate", "B2 - Upper-Intermediate"],
  },
  {
    category: "Advanced Levels",
    image: Photo13,
    items: ["C1 - Advanced", "C2 - Proficiency"],
  },
];

export default function Courses() {
  return (
    <section className="courses-section" id="courses">
      <h2 className="courses-title">Bizning Ingliz tili kurslarimiz</h2>
        <div className="rotating-item"></div>
        <div className="rotating-item2"></div>
      <div className="courses-container">
        {coursesData.map((block, index) => (
          <div key={index} className="course-block">
            <img
              src={block.image}
              alt={block.category}
              className="course-image"
            />
            <h3 className="course-category">{block.category}</h3>
            <ul className="course-list">
              {block.items.map((item, itemIndex) => (
                <li key={itemIndex} className="course-item">
                  <span className="dot"></span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
