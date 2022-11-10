import React, { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">VIRTUOSO</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="home">Home</a>
        <a href="#">Search Products</a>
        <a href="/Profile">Become a Seller</a>
        <a href="#">Cart</a>
        <a href="/Login">Login</a>
        
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Category
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/Craft">Craft Works</a></li>
    <li><a class="dropdown-item" href="/Pencil">Pencil Sketching</a></li>
    <li><a class="dropdown-item" href="/Paint">Painting Works</a></li>
    <li><a class="dropdown-item" href="/Wood">Wood Carving</a></li>
    <li><a class="dropdown-item" href="/Clay">Clay Toys</a></li>
    <li><a class="dropdown-item" href="/Gift">Gifts</a></li>
  </ul>

        <a href="#">About Us</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;