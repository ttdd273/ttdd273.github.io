import React from "react";
import { Link } from "react-router-dom";

const MyWorkSection = () => {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A Selection of School Projects and Online Tutorials
      </p>
      <div className="portfolio">
        {/* Portfolio item 1 */}
        <Link to="/computer-vision" className="portfolio__item">
          <img src={this.props.image1} alt="" className="portfolio__img" />
        </Link>
        {/* Portfolio item 2 */}
        <Link to="/pong" className="portfolio__item">
          <img src={this.props.image2} alt="" className="portfolio__img" />
        </Link>
        <Link to="/billsplitter" className="portfolio__item">
          <img src={this.props.image3} alt="" className="portfolio__img" />
        </Link>
        <Link to="/schoolprojects" className="portfolio__item">
          <img src={this.props.image4} alt="" className="portfolio__img" />
        </Link>
      </div>
    </section>
  );
};

export default MyWorkSection;
