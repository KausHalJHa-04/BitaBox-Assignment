import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">HoloGaze.</div>

      {/* Desktop Nav Links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Catalog</li>
        <li>Contact</li>
        <li>Features</li>
      </ul>

      {/* Search Bar (Desktop Only) */}
      <div className="search-bar">
        <input type="text" placeholder="Search games & products..." />
        <i className="ri-search-line"></i>
      </div>

      {/* Cart Icon */}
      <div className="cart-icon">
        <i className="ri-shopping-cart-line"></i>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>Catalog</li>
        <li>Contact</li>
        <li>Features</li>

        <div className="mobile-search">
          <input type="text" placeholder="Search..." />
          <i className="ri-search-line"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
