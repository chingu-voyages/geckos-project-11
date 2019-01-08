import React from 'react';

const Landing = () => {
    return (
      <section id="landing-container" className="flex-col">
        <article className="landing-area">
          <div className="landing-box">
            <h3 className="heading-text landing-header">3 easy steps to a better you!</h3>
            <p className="landing-box-number"><strong>0</strong></p>
          </div>
          <div className="landing-box">
            <p className="heading-text landing-header">Create weight based goals</p>
            <p className="landing-box-number"><strong>1</strong></p>
          </div>
          <div className="landing-box">
            <p className="heading-text landing-header">Log calorie intake</p>
            <p className="landing-box-number"><strong>2</strong></p>
          </div>
          <div className="landing-box">
            <p className="heading-text landing-header">Track your results</p>
            <p className="landing-box-number"><strong>3</strong></p>
          </div>
        </article>
      </section>
    )
  }

export default Landing;
