import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        className="header__image"
        src="./assets/barbetslogo.png"
        alt="BarBets logo"
      />
      <h2 className="header__title">
        BarBets - The fun way to promote your bar! Run sports wagers for
        discounts or promotions to your customers.
      </h2>
    </header>
  );
}

export default Header;
