import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <section id="landing-container" className="flex-col">
        <article className="landing-area">
          <div className="landing-box">
            <h2 className="heading-text landing-header landing-box-words">Welcome to Tonic Fitness!</h2>
            <p className="landing-box-words-d">We offer 3 easy to use features for creating goals, logging your caloric intake, and tracking your results.</p>
            <p className="landing-box-words-d">You + these tools = Results!</p>
          </div>
          <div className="landing-box">
            <Link to="/login/signup">
              <p className="heading-text landing-box-words">Sign up for a <em>free</em> account</p>
            </Link>
            <p className="landing-box-number"><strong>0</strong></p>
          </div>
          <div className="landing-box">
            <p className="heading-text landing-box-words">Create weight based goals</p>
            <p className="landing-box-number"><strong>1</strong></p>
          </div>
          <div className="landing-box">
            <p className="heading-text landing-box-words">Log calorie intake</p>
            <p className="landing-box-number"><strong>2</strong></p>
          </div>
          <div className="landing-box">
            <p className="heading-text landing-box-words">Track your results</p>
            <p className="landing-box-number"><strong>3</strong></p>
          </div>
        </article>
      </section>
    )
  }

export default Landing;
