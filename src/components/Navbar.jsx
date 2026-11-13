import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.png" alt="Miracle Scissors Logo" />
        <h2>Miracle Scissors</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <a href="#contact" className="nav-button">
        Book Appointment
      </a>
    </nav>
  );
}

export default Navbar;
