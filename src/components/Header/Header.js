import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="logo" alt="Foodly logo" src={Logo} />
      </Link>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <Link to="/" className="main-nav-link" href="#">
              Ana səhifə
            </Link>
          </li>
          <li>
            <Link to="/order-food" className="main-nav-link btn btn--full">
              Sifariş et!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
