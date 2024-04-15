import React from "react";

class Footer extends React.Component {
  render() {
    return (
      // The icons come from font-awesome
      <footer className="footer">
        <ul className="social-list">
          <li className="social-list__item">
            <a href="mailto:ttdd273w@gmail.com" className="social-list__link">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a href="https://github.com/ttdd273" className="social-list__link">
              {/* The <i> element in HTML is traditionally used to represent a span of text in an alternate voice */}
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              href="https://www.linkedin.com/in/ttdd273w"
              className="social-list__link"
            >
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
