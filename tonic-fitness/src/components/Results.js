import React from 'react'

const Results = (props) => {
  let maintenance = 2000;
  let totalCalories = 1750;
  let defecit = maintenance - totalCalories;
  let target = (props.weight - props.goal) * 3500;
  let pace = Math.round(target/defecit);

  return (
    <div id="results">
      <h2 className="header">Maintenance 2000 calories</h2>

      <section className="result-display">
        <article className="results-box flex-col">
            <i className="fas fa-weight"></i>
          <p className="heading-text dark-text"> Calories today: {totalCalories} </p>
        </article>
        <article className="results-box flex-col">
            <i className="fas fa-chart-line"></i>
          <p className="heading-text dark-text"> Current Pace: {pace} days</p>
        </article>
        <article className="results-box flex-col">
            <i className="fas fa-clock"></i>
          <p className="heading-text dark-text"> By: </p>
        </article>
      </section>
    </div>
  )
}


export default Results;
