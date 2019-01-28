import React from 'react';
import Chart from 'chart.js';

const Results = (props) => {
  let maintenance = 2000;
  let totalCalories = 1750;
  let defecit = maintenance - totalCalories;
  let target = (props.weight - props.goal) * 3500;
  let pace = Math.round(target/defecit);

  //Define ctx for Chart
  let ctx = document.getElementById("results-chart");

  //Setup Chart
  let resultChart = new Chart (ctx, {
    type: 'bar',
    data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      datasets: [{
        label: "Daily Goal",
        data: ["2000", "2000", "2000", "2000", "2000", "2000", "2000",],
        backgroundColor: [
          "green",
          "green",
          "green",
          "green",
          "green",
          "green",
          "green"
        ],
        borderColor: [
          "red",
          "red",
          "red",
          "red",
          "red",
          "red",
          "red"
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });

  return (
    <div id="results">
      <h2 className="header">Maintenance 2000 calories</h2>

      <section className="result-display">
        <canvas id="results-chart" width="600" height="600">
        </canvas>
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
