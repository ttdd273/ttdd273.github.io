import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <a href="mailto:ttdd273w@gmail.com" className="footer__link">
          ttdd273w@gmail.com
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a href="https://github.com/ttdd273" className="social-list__link">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a href="" className="social-list__link">
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a href="" className="social-list__link">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
