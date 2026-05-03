import React from "react";

function Header() {
  return (
    <header>
      <a href="#home" className="site-logo">TTDD</a>
      <nav className="nav">
        <ul className="nav__list">
          <li><a href="#home" className="nav__link">Home</a></li>
          <li><a href="#resumes" className="nav__link">Resume</a></li>
          <li><a href="#about" className="nav__link">About</a></li>
          <li><a href="#work" className="nav__link">Work</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
