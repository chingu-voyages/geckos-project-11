import React, { Component } from 'react';

class Goals extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      goalsList: [
        'I want to lose...',
        'By XX-XX-XXXX',
        'I want to fit into...'
      ],
      UI: {
        weight: '',
        lose: '',
        by: ''
      }
    }
  }

  optionSelected = () => {
    let selected = document.querySelector('.selection');
    return selected[selected.selectedIndex].value;
  }

  generateList = e => {
    let goal = this.state.goalsList;
    let currentUI = this.state.UI;

    let goalType = this.optionSelected() + '';
    if((goal[0] === 'I want to lose...' || goal[0] === 'By XX-XX-XXXX' || goal[0] === 'I want to fit into...') && e.charCode === 13) {
        goal = [];
        goal.push({[goalType]: e.target.value, ['id']:0});
        this.updateUI(goalType, e.target.value);
        e.target.value = '';
        this.props.renderApp(goal);
        this.setState({goalsList:goal});
      } else if (e.charCode === 13) {
          goal.push({[goalType]: e.target.value, ['id']:goal.length});
          this.updateUI(goalType, e.target.value);
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

  updateUI = (e, userInput) => {
    let currentUI = this.state.UI;
    currentUI[e] = userInput;
    console.log(currentUI)
    console.log(e)
    console.log(userInput)
    this.setState({UI: currentUI});
  }

// current weight

// weight loss goal

  render () {
    const {goalsList} = this.state;
    return (
      <div id="goals">
        <h1>My Goals</h1>
        <input
        className='textGoal' type='text' placeholder='Type your goal'
        onKeyPress={this.generateList}>
        </input>
        <select className='selection' onClick={this.optionSelected}>
          <option value='weight'>Current Weight</option>
          <option value='lose' >Ideal Weight</option>
          <option value='by'>By</option>
          </select>
        <ul>
          {goalsList.map(item => {
            return (
              <div>
                <li onClick={(this.deleteGoal.bind(this, item.id))}>{item.weight}</li>
                <li onClick={(this.deleteGoal.bind(this, item.id))}>{item.lose}</li>
              </div>
            )
          })}
        </ul>
        <section id="landing-container" className="flex-col">
        <div className="display flex-row">
          <article className="flex-col"> 
              <i className="fas fa-weight"></i>   
            <p className="heading-text"> Current Weight: <span className='weight'>{this.state.UI.weight}</span>
            </p>
          </article>
          <article className="flex-col">   
              <i className="fas fa-running"></i>     
            <p className="heading-text"> Ideal Weight: <span className='goal'>{this.state.UI.lose}</span>
            </p>
          </article>
          <article className="flex-col">   
              <i className="fas fa-clock"></i>     
            <p className="heading-text"> By: <span className='by'>{this.state.UI.by}</span>
            </p>
          </article>
        </div>
      </section>
      </div>
    );
  }
}

export default Goals;
