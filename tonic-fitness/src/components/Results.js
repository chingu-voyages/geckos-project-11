import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const Results = (props) => {
  //Bring in User Logs fromn props
  let logs = props.userLogs;

  //Filter logs by day
  const dayFilter = (day) => {logs.filter(log => log.day === day)};

  //Add calories from selected day
  const calorieAdder = (day) => {
    let dayOfWeek = dayFilter(day);
    let calorieTotal = 0;
    if (!dayOfWeek) {
      console.log(calorieTotal);
      return calorieTotal;
    } else {
      for (day in dayOfWeek) {
        calorieTotal += day.calories;
      };
      console.log(calorieTotal);
      return calorieTotal;
    }
  };

  //Store daily/weekly calorie totals
  const sundayTotal = calorieAdder("Sunday");
  const mondayTotal = calorieAdder("Monday");
  const tuesdayTotal = calorieAdder("Tuesday");
  const wednesdayTotal = calorieAdder("Wednesday");
  const thursdayTotal = calorieAdder("Thursday");
  const fridayTotal = calorieAdder("Friday");
  const saturdayTotal = calorieAdder("Saturday");
  const totalCalories = (sundayTotal + mondayTotal + tuesdayTotal + wednesdayTotal + thursdayTotal + fridayTotal + saturdayTotal);
  const overUnder = (-14000 + totalCalories);


  //Set data for Chart
  const chartData = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "Calories Logged",
        data: [sundayTotal, mondayTotal, tuesdayTotal, wednesdayTotal, thursdayTotal, fridayTotal, saturdayTotal],
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
          <p className="heading-text dark-text"> Weekly Calorie Total: {totalCalories} </p>
        </article>
        <article className="results-box flex-col">
            <i className="fas fa-chart-line"></i>
          <p className="heading-text dark-text"> Over/Under Goal: {overUnder}</p>
        </article>
      </section>
    </div>
  )
}


export default Results;
