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
  }

<<<<<<< HEAD

  generateList = e => {
    let goal = this.state.goalsList;
    if(goal[0] === 'I want to lose...' && e.charCode === 13) {
=======
  
  generateList = e => {
    let goal = this.state.goalsList;
    if(goal[0] === 'I want to lose...' && e.charCode == 13) {
>>>>>>> c64c5b4bff51d9876b1acd044a89fe670d13248f
        goal = [];
        goal.push(e.target.value);
        e.target.value = '';
        this.setState({goalsList:goal})
<<<<<<< HEAD
    } else if(e.charCode === 13) {
=======
    } else if(e.charCode == 13) {
>>>>>>> c64c5b4bff51d9876b1acd044a89fe670d13248f
      goal.push(e.target.value)
      e.target.value = '';
      this.setState({goalsList:goal})
    }
  }
<<<<<<< HEAD

=======
 
>>>>>>> c64c5b4bff51d9876b1acd044a89fe670d13248f
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
