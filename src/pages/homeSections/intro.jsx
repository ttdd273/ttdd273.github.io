import React from "react";

const IntroSection = () => {
  return (
    <section className="intro" id="home">
      <div className="intro__copy">
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Tony Duan</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          Building practical software.
        </p>
        <div className="intro__actions">
          <a href="#work" className="btn">
            View Work
          </a>
          <a href="mailto:ttdd273w@gmail.com" className="btn btn--secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
