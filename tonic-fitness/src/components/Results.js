import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Results = (props) => {
  let logs = props.userLogs;
  // let dailyCalories = [];

  //Filter by day
  const dayFilter = (day) => {logs.filter(log => log.day === day)}

  //Loop over User Logs and add daily calories to dailyCalories
  let monday = dayFilter("Monday");

  //Set data for Chart
  const chartData = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Calories Logged",
        data: [monday, "1200", "1500", "1200", "2000", "2000", "2200",],
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
    title: {
      display: true,
      text: "Daily goal based on 2000 calorie diet",
    },
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
      <h2 className="header">Weekly Result</h2>

      <section className="result-display">
        <article className="chart">
          <HorizontalBar
            data = {chartData}
            options= {chartOptions} />
        </article>
        <article className="results-box flex-col">
            <i className="fas fa-weight"></i>
          <p className="heading-text dark-text"> Weekly Calorie Total: {monday} </p>
        </article>
        <article className="results-box flex-col">
            <i className="fas fa-chart-line"></i>
          <p className="heading-text dark-text"> Over/Under Goal: Placeholder</p>
        </article>
      </section>
    </div>
  )
}


export default Results;
