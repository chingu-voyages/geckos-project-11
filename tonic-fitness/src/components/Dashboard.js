import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
      <section id="landing-container" className="flex-col">
        <div className="display flex-row">
          <article className="flex-col">
            <Link to="/goals">
              <i className="fas fa-list-ol"></i>
            </Link>
            <p className="heading-text"> Set Goals
            </p>
          </article>
          <article className="flex-col">
            <Link to="/log">
              <i className="fas fa-apple-alt"></i>
            </Link>
            <p className="heading-text"> Log Food
            </p>
          </article>
          <article className="flex-col">
            <Link to="results">
              <i className="fas fa-chart-bar"></i>
            </Link>
            <p className="heading-text"> See Results!
            </p>
          </article>
        </div>
      </section>
    )
  }

export default Dashboard;
