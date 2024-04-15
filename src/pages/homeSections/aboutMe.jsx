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
          I'm currently a CS M.Eng student @ Cornell. I studied CS as an
          undergrad, and I'm hoping to learn more about a variety of different
          things by experimenting, through classes, and through industry
          experience.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
