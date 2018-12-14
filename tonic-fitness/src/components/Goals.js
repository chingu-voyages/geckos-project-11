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
  }

  optionSelected = () => {
    let selected = document.querySelector('.selection');
    return selected[selected.selectedIndex].value;
  }
  
  generateList = e => {
    let goal = this.state.goalsList;
    let goalType = this.optionSelected() + '';
    if((goal[0] === 'I want to lose...' || goal[0] === 'By XX-XX-XXXX' || goal[0] === 'I want to fit into...') && e.charCode === 13) {
        goal = [];
        goal.push({[goalType]: e.target.value, ['id']:0});
        e.target.value = '';
        this.props.renderApp(goal);
        this.setState({goalsList:goal});
      } else if (e.charCode === 13) {
          goal.push({[goalType]: e.target.value, ['id']:goal.length});
          e.target.value = '';
          this.props.renderApp(goal);
          this.setState({goalsList:goal});
          
    }
  }
 
  deleteGoal = id => {
    let goal = this.state.goalsList;
    let updatedList = goal.filter(item => item.id !== id);
    return this.setState({goalsList:updatedList});
  }



  render () {
    const {goalsList} = this.state;
    return (
      <div className="goals">
        <h1>My Goals</h1>
        <input
        className='textGoal' type='text' placeholder='Type your goal' 
        onKeyPress={this.generateList}>
        </input>
        <select className='selection' onClick={this.optionSelected}>
          <option value='weight'>Weight loss</option>
          <option value='date' >Target date</option>
          <option value='misc'>Misc</option>
          </select>
        <ul>
          {goalsList.map(item => {
            return (
              <div>
                <li onClick={(this.deleteGoal.bind(this, item.id))}>{item.weight}</li>
                <li onClick={(this.deleteGoal.bind(this, item.id))}>{item.date}</li>
                <li onClick={(this.deleteGoal.bind(this, item.id))}>{item.misc}</li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Goals;
