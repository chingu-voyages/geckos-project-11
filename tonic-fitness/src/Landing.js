import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <section id="landing-container" className="flex-col">
        <div className="landing-display flex-col">
          <article className="landing-display-item flex-row">
            <i className="fas fa-list-ol fa-8x"></i>
          </article>
          <article className="landing-display-item flex-row">
            <i className="fas fa-apple-alt fa-8x"></i>
          </article>
          <article className="landing-display-item flex-row">
            <i className="fas fa-chart-bar fa-8x"></i>
          </article>
        </div>
      </section>
    );
  }
}

export default Landing;

// <img className="placeholder" src="./placeholder.png" alt="Placeholder Img" />
