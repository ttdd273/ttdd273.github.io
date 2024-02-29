import React from "react";

const ResumeSection = () => {
  return (
    <section className="my-resumes" id="resumes">
      <h2 className="section__title section__title--resumes">
        Resume Information
      </h2>
      <div className="resumes">
        <div className="resume">
          <h3>Related Coursework</h3>
          <ul>
            <li>Data Structures and OOP</li>
            <li>Intro Computing Using Python</li>
            <li>Discrete Structures</li>
            <li>Differential Equations</li>
            <li>Intro to ML</li>
            <li>Computer Organization</li>
            <li>Analysis of Algorithms</li>
            <li>Foundations of AI</li>
          </ul>
        </div>
        <div className="resume">
          <h3>Work Experience</h3>
          <ul>
            <li>Varsity Tutors Tutor</li>
            <li>Queens Library Volunteer</li>
            <li>Frontend Developer for Project Team</li>
          </ul>
        </div>
        <div className="resume">
          <h3>Education</h3>
          <ul>
            <li>Bachelor's Degree: Cornell University</li>
            <li>High School: The Bronx HS Of Science</li>
          </ul>
        </div>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
};

export default ResumeSection;
