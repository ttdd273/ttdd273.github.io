import React, { useState } from "react";
import Portfolio from "../portfolio";
import { portfolioItems, Categories } from "./portfolioItems";

const MyWorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(Categories.All);

  const categoryOptions = [
    Categories.All,
    Categories.WorkExperience,
    Categories.SchoolProjects,
    Categories.PersonalProjects,
  ];

  const filteredPortfolio =
    selectedCategory === Categories.All
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        Work experience, school projects, and personal builds.
      </p>

      <div className="portfolio-selector" aria-label="Portfolio categories">
        {categoryOptions.map((category) => (
          <button
            className={`btn ${
              selectedCategory === category ? "btn--active" : ""
            }`}
            key={category}
            onClick={() => setSelectedCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="portfolio">
        {filteredPortfolio.map((item, index) => {
          return (
            <Portfolio
              key={index}
              categoryName={item.category}
              projectName={item.projectName}
              description={item.description}
              rightDescriptor={item.rightDescriptor}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyWorkSection;
