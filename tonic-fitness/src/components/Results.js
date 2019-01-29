import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Results = (props) => {
  let maintenance = 2000;
  let totalCalories = 1750;
  let defecit = maintenance - totalCalories;
  let target = (props.weight - props.goal) * 3500;
  let pace = Math.round(target/defecit);

  //Set data for Chart
  const chartData = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Calories Logged",
        data: ["1000", "1200", "1500", "1200", "2000", "2000", "2200",],
        backgroundColor: "#5eb8ff",
        borderColor: "#0288d1",
        borderWidth: 1
      },
      {
      label: "Daily Goal",
      data: ["2000", "2000", "2000", "2000", "2000", "2000", "2000",],
      backgroundColor: "black",
      borderColor: "#0288d1",
      borderWidth: 1
    }]
  };

  //Set options for chart
  const chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        },
        stacked: true
      }]
    },
    barThickness: "flex"
  };


  return (
    <div id="results">
      <h2 className="header">Maintenance 2000 calories</h2>

      <section className="result-display">
        <article className="chart">
          <HorizontalBar
            data = {chartData}
            options= {chartOptions} />
        </article>
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
