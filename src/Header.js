import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__image">
        <img src="./assets/barbetslogo.png" alt="BarBets logo" />
      </div>
      <div className="header__title">
        <h2>
          BarBets - The fun way to promote your bar! Run sports wagers for
          discounts or promotions to your customers.
        </h2>
      </div>
    </header>
  );
}

export default Header;
