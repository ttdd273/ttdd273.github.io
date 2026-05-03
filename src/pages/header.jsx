import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.body.classList.toggle("nav-open", next);
  };

  const closeNav = () => {
    setIsOpen(false);
    document.body.classList.remove("nav-open");
  };

  return (
    <header>
      <div className="logo">
        <h2 id="nav__title">
          <a href="#home">TTDD</a>
        </h2>
      </div>
      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        aria-controls="site-navigation"
        onClick={toggleNav}
        type="button"
      >
        <span className="hamburger"></span>
      </button>
      <nav className="nav" id="site-navigation">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={closeNav}>
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#resumes" className="nav__link" onClick={closeNav}>
              Resume Information
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={closeNav}>
              About Me
            </a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link" onClick={closeNav}>
              My Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
