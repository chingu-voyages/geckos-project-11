import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section id="dashboard-container">
      <article className="display flex-row">
        <Link to="/goals" className="landing-box flex-row">
          <i className="fas fa-list-ol"></i>
          <p className="heading-text"> Create Goals
          </p>
        </Link>
        <Link to="/log" className="landing-box flex-row">
          <i className="fas fa-apple-alt"></i>
          <p className="heading-text"> Log Calories
          </p>
        </Link>
        <Link to="results" className="landing-box flex-row">
          <i className="fas fa-chart-bar"></i>
          <p className="heading-text"> See Results
          </p>
        </Link>
      </article>
    </section>
  )
}

export default Dashboard;
