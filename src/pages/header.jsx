import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  openNavBar = () => {
    this.setState(
      (state) => ({ isOpen: !state.isOpen }),
      () => {
        document.body.classList.toggle("nav-open", this.state.isOpen);
      }
    );
  };

  closeNavBar = () => {
    document.body.classList.remove("nav-open");
    this.setState({ isOpen: false });
  };

  render() {
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
          aria-expanded={this.state.isOpen}
          aria-controls="site-navigation"
          onClick={this.openNavBar}
          type="button"
        >
          <span className="hamburger"></span>
        </button>
        <nav className="nav" id="site-navigation">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link" onClick={this.closeNavBar}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#resumes" className="nav__link" onClick={this.closeNavBar}>
                Resume Information
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={this.closeNavBar}>
                About Me
              </a>
            </li>
            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={this.closeNavBar}>
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
