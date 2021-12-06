import React from "react";
import { Link } from 'react-router-dom';
import Myself from './../../assets/img/myself.jpg'


class Home extends React.Component {
    render() {
        return (
            <div>
                {/* Introduction */}
                {/* classes for styling, ids for anchoring */}
                <section className="intro" id="home">
                    <h1 className="section__titleBegin section__title--introBegin">
                        Hi, I am <strong>Tony Duan</strong>
                    </h1>
                    {/* <h2 className="section__subtitleBegin section__subtitle--introBegin">Computer Science</h2> */}
                    {/* <p className="section__subtitleBegin section__subtitle--introBegin">Computer Science</p> */}
                    {/* <img src="somehwere." alt="" className="profile__img"/> */}
                </section>

                <section className="my-services" id="services">
                    <h2 className="section__title section__title--services">Resume Information</h2>
                    <div className="services">
                        <div className="service">
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
                        <div className="service">
                            <h3>Work Experience</h3>
                            <ul>
                                <li>Varsity Tutors Tutor</li>
                                <li>Queens Library Volunteer</li>
                                <li>Frontend Developer for Project Team</li>
                            </ul>
                        </div>
                        <div className="service">
                            <h3>Education</h3>
                            <ul>
                                <li>Bachelor's Degree: Cornell University</li>
                                <li>High School: The Bronx HS Of Science</li>
                            </ul>
                        </div> 
                    </div>

                    <a href="#work" className="btn">My Work</a>
                </section>

                {/* About Me */}
                <section className="about-me" id="about">
                    <h2 className="section__title section__title--about">Who I Am</h2>
                    <p className="section__subtitle section__subtitle--about">A Little About Myself</p>

                    <div className="about-me__body">
                        <p>I am currently studying CS, and I hope to learn more about CS through a job,
                             so that I can finally be stressed and be paid and not be stressed while paying money.
                             Thank you for reading this, I hope you can consider hiring me, below are some projects
                             I've learned from other people online as well as some school projects (thank you).
                        </p>
                    </div>
                    <img src={Myself} alt="" className="about-me__img"/>
                </section>

                {/* My Work */}
                <section className="my-work" id="work">
                    <h2 className="section__title section__title--work">My Work</h2>
                    <p className="section__subtitle section__subtitle--work">A Selection of School Projects and Online Tutorials</p>
                    <div className="portfolio">
                        {/* Portfolio item 1 */}
                        <Link to="/computer-vision" className="portfolio__item">
                            <img src={this.props.image1} alt="" className="portfolio__img"/>
                        </Link>
                        {/* Portfolio item 2 */}
                        <Link to="/pong" className="portfolio__item">
                            <img src={this.props.image2} alt="" className="portfolio__img"/>
                        </Link>
                        <Link to="/billsplitter" className="portfolio__item">
                            <img src={this.props.image3} alt="" className="portfolio__img"/>
                        </Link>
                        <Link to="/schoolprojects" className="portfolio__item">
                            <img src={this.props.image4} alt="" className="portfolio__img"/>
                        </Link>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default Home