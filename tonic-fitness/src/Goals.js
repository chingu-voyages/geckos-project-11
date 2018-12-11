import React, { Component } from 'react';

class Goals extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      goalsList: [
        'I want to lose...',
        'By XX-XX-XXXX',
        'I want to fit into...'
      ]
    }
    this.generateList = this.generateList.bind(this);
  }

  
  generateList = e => {
    let goal = this.state.goalsList;
    if(e.charCode == 13) {
      goal.push(e.target.value)
      e.target.value = '';
      this.setState({goalsList:goal})
    }
  }
 
  render () {
    const {goalsList} = this.state;
    return (
      <div className="goals">
        <h1>My Goals</h1>
        <input
        className='textGoal' type='text' placeholder='Type your goal' onKeyPress={this.generateList}>
        </input>
        <ul>
          {goalsList.map(item => {
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
