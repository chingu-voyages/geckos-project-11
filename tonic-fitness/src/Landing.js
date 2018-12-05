import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <section id="landing-container" className="flex-col">
        <div className="landing-display flex-row">
          <article className="landing-display-item flex-col">
            <i className="fas fa-list-ol fa-8x"></i>
            <p className="heading-text"> Set Goals
            </p>
          </article>
          <article className="landing-display-item flex-col">
            <i className="fas fa-apple-alt fa-8x"></i>
            <p className="heading-text"> Log Food
            </p>
          </article>
          <article className="landing-display-item flex-col">
            <i className="fas fa-chart-bar fa-8x"></i>
            <p className="heading-text"> See Results!
            </p>
          </article>
        </div>
      </section>
    );
  }
}

export default Landing;

// <img className="placeholder" src="./placeholder.png" alt="Placeholder Img" />
