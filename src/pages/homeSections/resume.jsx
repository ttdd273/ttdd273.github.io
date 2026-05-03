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
            <li>Analysis of Algorithms</li>
            <li>Foundations of Artificial Intelligence</li>
            <li>Machine Learning</li>
            <li>Computer Organization</li>
            <li>Data Structures and Object-Oriented Programming</li>
          </ul>
        </div>
        <div className="resume">
          <h3>Work Experience</h3>
          <ul>
            <li>Software Engineering Intern, Yext</li>
            <li>Software Engineering Intern, Visa</li>
            <li>Frontend Developer for Cornell project team</li>
          </ul>
        </div>
        <div className="resume">
          <h3>Education</h3>
          <ul>
            <li>M.Eng in Computer Science, Cornell University</li>
            <li>B.S. in Computer Science, Cornell University</li>
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
