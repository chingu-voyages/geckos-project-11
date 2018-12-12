import React, { Component } from 'react';
import '../stylesheets/Goals.scss';

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
    this.deleteItem = this.deleteItem.bind(this);
  }

  
  generateList = e => {
    let goal = this.state.goalsList;
    if(goal[0] === 'I want to lose...' && e.charCode === 13) {
        goal = [];
        goal.push(e.target.value);
        e.target.value = '';
        this.setState({goalsList:goal})
    } else if(e.charCode === 13) {
      goal.push(e.target.value)
      e.target.value = '';
      this.setState({goalsList:goal})
    }
  }
 
  deleteItem = e => {
    let goal = this.state.goalsList;
    let updatedList = goal.filter(item => item !== e.target.textContent);
    return this.setState({goalsList:updatedList});
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
            <li onClick={(this.deleteItem)}>{item}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Goals;
