import React from "react";
import "./../assets/css/style.css";

class Header extends React.Component {
  openNavBar() {
    const navToggle = document.querySelector(".nav-toggle");

    const navLinks = document.querySelectorAll(".nav__link");

    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("nav-open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
      });
    });
  }

  render() {
    return (
      <header>
        <div className="logo">
          {/* personal image */}
          <h2 id="nav__title">
            <a href="/ttdd273w">TTDD</a>
          </h2>
        </div>
        <button
          className="nav-toggle"
          aria-label="toggle-navigation"
          onClick={this.openNavBar}
        >
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          {/* double underscore for a subsection */}
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/ttdd273w" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/ttdd273w/#resumes" className="nav__link">
                Resume Information
              </a>
            </li>
            <li className="nav__item">
              <a href="/ttdd273w/#about" className="nav__link">
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a href="/ttdd273w/#work" className="nav__link">
                My Work
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
