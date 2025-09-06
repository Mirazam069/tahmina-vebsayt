import React from "react";
import "./StatsSection.css";

const StatsSection = () => {
  return (
    <section className="stats-section" id="statssection">
      <div className="stats-container">
        {/* Yuqoridagi 3 ta box */}
        <div className="stats-row">
          <div className="stats-box">
            <h3>Tezkor xizmat</h3>
            <p>O'quvchilar savollariga 24/7 javob beriladi.</p>
          </div>
          <div className="stats-box">
            <h3>Innovatsiya</h3>
            <p>Sun'iy intellekt yordamida ingliz tilini o'qitamiz.</p>
          </div>
          <div className="stats-box">
            <h3>Ishonch</h3>
            <p>450+ o'quvchilar bizga ishonch bildirdi.</p>
          </div>
        </div>

        {/* Pastdagi 3 ta box (erishilgan natijalar) */}
        <div className="stats-row">
          <div className="stats-box result">
            <h2>3+</h2>
            <p>kurslar soni</p>
          </div>
          <div className="stats-box result">
            <h2>450+</h2>
            <p>Muvaffaqqiyatli o'quvchilar</p>
          </div>
          <div className="stats-box result">
            <h2>5+</h2>
            <p>Yillik tajriba</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
