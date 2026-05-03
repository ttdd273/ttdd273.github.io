import React from "react";
import profileImage from "../../assets/img/myself.jpg";

const IntroSection = () => {
  return (
    <section className="intro" id="home">
      <div className="intro__copy">
        <p className="eyebrow">Software Engineer</p>
        <h1 className="section__title section__title--intro">
          Hi, I am <strong>Tony Duan</strong>
        </h1>
        <p className="section__subtitle section__subtitle--intro">
          CS M.Eng student at Cornell building practical software.
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
      <img src={profileImage} alt="Tony Duan" className="intro__img" />
    </section>
  );
};

export default IntroSection;
