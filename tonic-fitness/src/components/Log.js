import React, { Component } from 'react';

class Log extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      localEntry: {
        day: '',
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
    const currentDay = this.state.localEntry.day;
    const currentMeal = this.state.localEntry.meal;
    const currentCalories = this.state.localEntry.calories;

    //Build new object to pass to postUserLogs function in app.js
    const newEntry = {
      day: `${currentDay}`,
      meal: `${currentMeal}`,
      calories: `${currentCalories}`
    }

    //Pass newEntry object to postUserLogs function in app.js
    this.props.postLog(newEntry);

    //Reset log entry form
    this.setState ({
      localEntry: {
        day: '',
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

          <h4 className="cal-entry-item-title">Day: </h4>
          <div className="cal-entry-item flex-row">
            <select name="day"
                    value={localEntry.day}
                    onChange={this.handleInputChange} >
              <option>Choose Day</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
            </select>
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
                  <h4 className="log-entry-item title"> {currentEntry.day} </h4>
                </span>
                <h4 className="log-entry-item title"> {currentEntry.meal} - {currentEntry.calories} cal </h4>
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
