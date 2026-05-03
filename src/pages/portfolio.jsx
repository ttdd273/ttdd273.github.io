import React from "react";

const Portfolio = ({
  categoryName,
  projectName,
  description,
  rightDescriptor,
}) => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item--header">
        <h3>{projectName}</h3>
        {rightDescriptor && (
          <span className="right-descriptor">{rightDescriptor}</span>
        )}
      </div>

      <p className="portfolio-item__category">{categoryName}</p>
      <p>{description}</p>
    </div>
  );
};

export default Portfolio;
