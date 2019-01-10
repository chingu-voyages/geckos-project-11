import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
      <section id="dashboard-container">
        <article className="display flex-row">
          <div className="landing-box flex-row">
            <Link to="/goals">
              <i className="fas fa-list-ol"></i>
            </Link>
            <p className="heading-text"> Create Goals
            </p>
          </div>
          <div className="landing-box flex-row">
            <Link to="/log">
              <i className="fas fa-apple-alt"></i>
            </Link>
            <p className="heading-text"> Log Calories
            </p>
          </div>
          <div className="landing-box flex-row">
            <Link to="results">
              <i className="fas fa-chart-bar"></i>
            </Link>
            <p className="heading-text"> See Results
            </p>
          </div>
        </article>
      </section>
    )
  }

export default Dashboard;
