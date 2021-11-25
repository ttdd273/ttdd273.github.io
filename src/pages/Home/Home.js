import React from "react";
import portfolio from './../../assets/img/portfolio.jpg'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div>
                {/* Introduction */}
                {/* classes for styling, ids for anchoring */}
                <section className="intro" id="home">
                    <h1 className="section__title section__title--intro">
                        Hi, I am <strong>Tony Duan</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--intro">front end dev</p>
                    <img src="somehwere." alt="" className="intro__img"/>
                </section>

                {/* My Services */}
                <section className="my-services" id="services">
                    <h2 className="section__title section__title--services">What I Do</h2>
                    <div className="services">
                        <div className="service">
                            <h3>Design Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className="service">
                            <h3>E-Commerce</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className="service">
                            <h3>WordPress</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div> 
                    </div>

                    <a href="#work" className="btn">My Work</a>
                </section>

                {/* About Me */}
                <section className="about-me" id="about">
                    <h2 className="section__title section__title--about">Who I Am</h2>
                    <p className="section__subtitle section__subtitle--about">im the coolest</p>

                    <div className="about-me__body">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    </div>
                    <img src="img/person.jpg" alt="" className="about-me__img"/>
                </section>

                {/* My Work */}
                <section className="my-work" id="work">
                    <h2 className="section__title section__title--work">My Work</h2>
                    <p className="section__subtitle section__subtitle--work">A Selection of ma work</p>
                    <div className="portfolio">
                        {/* Portfolio item 1 */}
                        <Link to="/computer-vision" className="portfolio__item">
                        {/* <a href="portfolio-item.html" className="portfolio__item"> */}
                            {/* <h1 className="portfolio__name" >First port</h1> */}
                            <img src={portfolio} alt="" className="portfolio__img"/>
                        </Link>
                        {/* Portfolio item 2 */}
                        <Link to="/pong" className="portfolio__item">
                            <img src={portfolio} alt="" className="portfolio__img"/>
                        </Link>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default Home