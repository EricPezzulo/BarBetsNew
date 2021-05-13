import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <a
        href="https://www.instagram.com/barbets_app/"
        target="_blank"
        alt="BarBets Instagram"
      >
        <i class="fab fa-instagram"></i> &nbsp;
        <span>Follow us at @barbets_app</span> &nbsp;
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  );
}

export default Banner;
