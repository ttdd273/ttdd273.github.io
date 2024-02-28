import React from 'react';

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <section class="intro" id="home">
                    <h1 class="section__title section__title--intro">
                        {this.props.categoryName}<strong>{this.props.projectName}</strong>
                    </h1>
                    <p class="section__subtitle section__subtitle--intro">{this.props.subtitleName}</p>
                    <img src={this.props.imagePath} alt="" class="intro__img" />
                </section>

                <div class="portfolio-item-individual">
                    <p>{this.props.description}</p>
                    </div>
            </div>
        )
    }
}

export default Portfolio;