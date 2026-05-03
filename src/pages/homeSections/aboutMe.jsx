import React from "react";

const AboutMeSection = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I Am</h2>
      <p className="section__subtitle section__subtitle--about">
        A Little About Myself
      </p>

      <div className="about-me__body">
        <p>
          I'm a Cornell CS M.Eng student with experience across full-stack
          product work, infrastructure, accessibility, and applied machine
          learning. I like projects that turn ambiguous problems into simple,
          useful tools.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
