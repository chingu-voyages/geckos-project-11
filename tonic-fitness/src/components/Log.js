import React, { Component } from 'react';

class Log extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      localEntry: {
        day: '',
        month: '',
        year: '',
        meal: '',
        calories: ''
      }
    }

    //Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddEntry = this.handleAddEntry.bind(this);
    this.handleRemoveEntry = this.handleRemoveEntry.bind(this);
  }

  /* Form inputs are pushed up into this.state.entry so that React has total control of the data */
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

  /*Commits info from termporary this.state.localEntry to
  permanent entry in this.state.log and resets input
  fields in localEntry */
  handleAddEntry(e) {
    const currentDay = this.props.localEntry.day;
    const currentMonth = this.props.localEntry.month;
    const currentYear = this.props.localEntry.year;
    const currentMeal = this.props.localEntry.meal;
    const currentCalories = this.props.localEntry.calories;

    //Build new object to push into this.state.log
    const newEntry = {
      day: `${currentDay}`,
      month: `${currentMonth}`,
      year: `${currentYear}`,
      meal: `${currentMeal}`,
      calories: `${currentCalories}`
    }

    //Push into this.state.log// function from aap.js to post it to db
    this.state.log.push(newEntry);

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

  /* Removes entry from this.state.log and visible list of entries on page */
  handleRemoveEntry(e) {
    const getLog = this.state.log;
    const changeLog = getLog.filter(entry => entry !== e);

    this.setState ({
      log: changeLog
    })
  }


  render() {

    return (
      <div id="log">
        <h2 className="title flex-col">
          Fill in your calorie entry below and click to add it to your log
        </h2>
        <section className="cal-entry flex-row">

          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Date: </h4>
            <input name="month"
                   type="number"
                   min="1"
                   max="12"
                   placeholder="M"
                   value={this.state.localEntry.month}
                   onChange={this.handleInputChange} />
            <input name="day"
                   type="number"
                   min="1"
                   max="31"
                   placeholder="D"
                   value={this.state.localEntry.day}
                   onChange={this.handleInputChange} />
            <input name="year"
                   type="number"
                   min="2017"
                   placeholder="Y"
                   value={this.state.localEntry.year}
                   onChange={this.handleInputChange} />
          </div>
          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Meal: </h4>
            <select name="meal"
                    value={this.state.localEntry.meal}
                    onChange={this.handleInputChange} >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Calories: </h4>
            <input name="calories"
                   type="number"
                   placeholder="Number Only"
                   value={this.state.localEntry.calories}
                   onChange={this.handleInputChange} />
          </div>
          <button name="add"
                  className="entry-button"
                  onClick={this.handleAddEntry}>
            <i className="far fa-times-circle"></i>
          </button>
        </section>

        {/* Map over this.state.log and display each entry */}
        {this.state.log.map((currentEntry, index) => (
          <section className="entry-log flex-row"
                   key={index} >
            <div className="flex-row">
              <h4 className="log-entry-item title"> {currentEntry.month} </h4>
              <h4 className="log-entry-item title"> / </h4>
              <h4 className="log-entry-item title"> {currentEntry.day} </h4>
              <h4 className="log-entry-item title"> / </h4>
              <h4 className="log-entry-item title"> {currentEntry.year} </h4>
              <h4 className="log-entry-item title"> {currentEntry.meal} - {currentEntry.calories} calories </h4>
            </div>
            <button name="add"
                    className="remove-button"
                    onClick={() => {this.handleRemoveEntry(currentEntry)}} >
              <i className="far fa-times-circle"></i>
            </button>
          </section>
          ))
        }
      </div>
    )
  }
}

export default Log;
