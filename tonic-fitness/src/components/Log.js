import React, { Component } from 'react';

class Log extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      localEntry: {
        month: '',
        day: '',
        year: '',
        meal: '',
        calories: ''
      },
    }

    //Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddEntry = this.handleAddEntry.bind(this);
  }

  /* Form inputs are pushed up into this.state.localEntry so that React has total control of the data */
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const inputName = target.name;

    //Copy entry from state and then add changes
    let entryCopy = Object.assign({}, this.state.localEntry);
    entryCopy[inputName] = value;

    //Replace object in state with updated object
    this.setState ({
      localEntry: entryCopy
    })
  }

  /*Commits info from temporary this.state.localEntry to permanent entry in DB log through postUserLogs function in app.js and resets input fields in localEntry */
  handleAddEntry(e) {
    const currentMonth = this.state.localEntry.month;
    const currentDay = this.state.localEntry.day;
    const currentYear = this.state.localEntry.year;
    const currentMeal = this.state.localEntry.meal;
    const currentCalories = this.state.localEntry.calories;

    //Build new object to pass to postUserLogs function in app.js
    const newEntry = {
      month: `${currentMonth}`,
      day: `${currentDay}`,
      year: `${currentYear}`,
      meal: `${currentMeal}`,
      calories: `${currentCalories}`
    }

    //Pass newEntry object to postUserLogs function in app.js
    this.props.postLog(newEntry);

    //Reset log entry form
    this.setState ({
      localEntry: {
        day: '',
        month: '',
        year: '',
        meal: '',
        calories: ''
      }
    })
  }


  render() {
    //Destructuring
    const { userLogs, removeLog } = this.props;
    const { localEntry } = this.state;

    return (
      <div id="log">
        <h2 className="title header">
          Fill in your calorie entry below and click to add it to your log
        </h2>

        <section className="cal-entry flex-col">

          <h4 className="cal-entry-item-title">Date: </h4>
          <div className="cal-entry-item flex-row">
            <input name="month"
                   type="number"
                   min="1"
                   max="12"
                   placeholder="M"
                   value={localEntry.month}
                   onChange={this.handleInputChange} />
            <input name="day"
                   type="number"
                   min="1"
                   max="31"
                   placeholder="D"
                   value={localEntry.day}
                   onChange={this.handleInputChange} />
            <input name="year"
                   type="number"
                   min="2017"
                   placeholder="Y"
                   value={localEntry.year}
                   onChange={this.handleInputChange} />
          </div>
          <h4 className="cal-entry-item-title">Meal: </h4>
          <div className="cal-entry-item flex-row">
            <select name="meal"
                    value={localEntry.meal}
                    onChange={this.handleInputChange} >
              <option>Choose Meal</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <h4 className="cal-entry-item-title">Calories: </h4>
          <div className="cal-entry-item flex-row">
            <input name="calories"
                   type="number"
                   placeholder="Number Only"
                   value={localEntry.calories}
                   onChange={this.handleInputChange} />
          </div>
          <button name="add"
                  className="entry-button"
                  onClick={this.handleAddEntry}>
            <i className="far fa-times-circle"></i>
          </button>
        </section>

        {/* Map over this.state.log and display each entry */}
        <section className="entry-log-area">
          <h4 className="log-entry-item title">Log Entries </h4>
          {userLogs.map((currentEntry, index) => (
            <article className="entry-log flex-col"
                     key={index} >
              <div className="flex-col">
                <span className="flex-row">
                  <h4 className="log-entry-item title"> {currentEntry.month} </h4>
                  <h4 className="log-entry-item title"> / </h4>
                  <h4 className="log-entry-item title"> {currentEntry.day} </h4>
                  <h4 className="log-entry-item title"> / </h4>
                  <h4 className="log-entry-item title"> {currentEntry.year} </h4>
                </span>
                <h4 className="log-entry-item title"> {currentEntry.meal} - {currentEntry.calories} calories </h4>
              </div>
              <button name="remove"
                      className="remove-button"
                      onClick={() => {removeLog(currentEntry.id)}} >
                <i className="far fa-times-circle"></i>
              </button>
            </article>
            ))
          }
        </section>
      </div>
    )
  }
}

export default Log;
