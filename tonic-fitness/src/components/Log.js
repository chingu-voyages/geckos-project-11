import React, { Component } from 'react';

class Log extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        day: '',
        meal: '',
        calories: ''
      },
      log: [
        {
          day: '',
          meal: '',
          calories: ''
        }
      ]
    }

    //Bindings
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  //Form inputd are pushed up into state so that React
  //has total control of the data
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const inputName = target.name;

    //Copy entry from state and then add changes
    let entryCopy = Object.assign({}, this.state.entry);
    entryCopy[inputName] = value;

    this.setState ({
      entry: entryCopy
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
            <h4 className="cal-entry-item-title">Day: </h4>
            <input name="day"
                   type="text"
                   value={this.state.entry.day}
                   onChange={this.handleInputChange} />
          </div>
          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Meal: </h4>
            <select name="meal"
                    value={this.state.entry.meal}
                    onChange={this.handleInputChange} >
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Calories: </h4>
            <input name="calories"
                   type="number"
                   placeholder="Number Only"
                   value={this.state.entry.calories}
                   onChange={this.handleInputChange} />
          </div>
          <button name="add" className="entry-button">
            <i class="far fa-plus-square"></i>
          </button>
        </section>
      </div>
    )
  }
}

export default Log;
