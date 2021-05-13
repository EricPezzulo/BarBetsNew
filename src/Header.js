import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__image">
        <img src="./assets/barbetslogo.png" alt="BarBets logo" />
      </div>
      <h2 className="header__title">
        BarBets - The fun way to promote your bar! Run sports wagers for
        discounts or promotions to your customers.
      </h2>
    </header>
  );
}

export default Header;
