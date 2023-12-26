import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div>
          <ul className="social-icons">
            <li>
              <i className="fab fa-facebook fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-twitter fa-2x"></i>
            </li>
            <li>
              <i className="fab fa-whatsapp fa-2x"></i>
            </li>
          </ul>
        </div>
        <div className="right-content">
          <button className="categories-button">
            <h4>
              Categories
              <i className="fas fa-caret-down"></i>
            </h4>
          </button>
          <ul className="about-list">
            <h4>
              <li>About</li>
            </h4>
          </ul>
        </div>
      </div>
      <div className="hamburger-icon">
        <i className="fa-solid fa-bars fa-2xl"></i>
      </div>
    </header>
  );
}

export default Header;
