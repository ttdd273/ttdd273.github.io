import React, { useState } from "react";
import Portfolio from "../portfolio";
import { portfolioItems, Categories } from "./portfolioItems";

const MyWorkSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    Categories.WorkExperience
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterPortfolioByCategory = (category) => {
    // Filter based on the selected category
    return portfolioItems.filter((item) => item.category === category);
  };

  const filteredPortfolio = filterPortfolioByCategory(selectedCategory);

  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A Selection of School Projects and Online Tutorials
      </p>

      <div className="portfolio-selector">
        <button
          className="btn"
          onClick={() => handleCategoryChange(Categories.PersonalProjects)}
        >
          {Categories.PersonalProjects}
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange(Categories.WorkExperience)}
        >
          {Categories.WorkExperience}
        </button>
        <button
          className="btn"
          onClick={() => handleCategoryChange(Categories.SchoolProjects)}
        >
          {Categories.SchoolProjects}
        </button>
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
