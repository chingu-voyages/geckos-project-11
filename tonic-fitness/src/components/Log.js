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
  }

  //Form inputd are pushed up into state so that React
  //has total control of the data
  handleInputChange(e) {
    const target = e.target;
    const value = target.type;
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
            <input type="text" name="date" />
          </div>
          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Meal: </h4>
            <select name="meal">
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Snack</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="cal-entry-item flex-row">
            <h4 className="cal-entry-item-title">Calories: </h4>
            <input type="number" name="calories" placeholder="Number Only"/>
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
