import React, { Component } from 'react';

class Goals extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      goalsList: [
        'I want to lose...',
        'By XX-XX-XXXX',
        'I want to fit'
      ]
    }

  }
 
  render () {
    return (
      <div className="goals">

        <ul>
          {this.state.goalsList.map(item => {
            return (
            <li>{item}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Goals;
