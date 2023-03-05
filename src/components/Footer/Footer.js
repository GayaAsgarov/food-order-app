import React from "react";
import Logo from "../../assets/img/logo.svg";
import { IonIcon } from "@ionic/react";
import { Icon } from "@iconify/react";
import { logoInstagram } from "ionicons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-col">
          <Link to="/" className="footer-logo">
            <img className="logo" alt="Foodly logo" src={Logo} />
          </Link>
          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <Icon className="social-icon" icon="ion:logo-instagram" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <Icon className="social-icon" icon="ion:logo-facebook" />
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <Icon className="social-icon" icon="ion:logo-twitter" />
              </a>
            </li>
          </ul>
        </div>
        <nav className="nav-col">
          <p className="footer-heading">Hesab</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Hesab yarat
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Daxil olun
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Şirkət</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Foodly haqqında
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Biznes üçün
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Bişirmə tərəfdaşları
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Karyera
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resurslar</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Resept kataloqu
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Yardım mərkəzi
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Məxfilik və şərtlər
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="copyright">© 2021 Foodly Technologies Inc.</p>
    </footer>
  );
};

export default Footer;
