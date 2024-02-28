import React from "react";
import Myself from "../../../assets/img/myself.jpg";

const AboutMeSection = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I Am</h2>
      <p className="section__subtitle section__subtitle--about">
        A Little About Myself
      </p>

      <div className="about-me__body">
        <p>
          I am currently studying CS, and I hope to learn more about CS through
          a job, so that I can finally be stressed and be paid and not be
          stressed while paying money. Thank you for reading this, I hope you
          can consider hiring me, below are some projects I've learned from
          other people online as well as some school projects (thank you).
        </p>
      </div>
      <img src={Myself} alt="" className="about-me__img" />
    </section>
  );
};

export default AboutMeSection;
