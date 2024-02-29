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
        <h3>
          <strong>{projectName}</strong>
        </h3>
        {rightDescriptor && (
          <p className="right-descriptor">{rightDescriptor}</p>
        )}
      </div>

      {description}
    </div>
  );
};

export default Portfolio;
