import React from "react";
import "./Marquee.css";

const Marquee = () => {
  return (
    <div>
      {/* 1-lenta (tepadan pastga) */}
      <div className="marquee-bar marquee-1 first">
        <div className="marquee-inner ">
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>

        </div>
      </div>

      {/* 2-lenta (pastdan tepaga) */}
      <div className="marquee-bar marquee-2">
        <div className="marquee-inner">
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
          <span>   TAHMINA IELTS VA CEFR MENTORI   TAHMINA IELTS VA CEFR MENTORI   </span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
