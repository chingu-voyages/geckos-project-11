import React, { Component } from 'react';

class Goals extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      UI: {
        weight: '[input above]',
        goal: '[input above]',
        by: '[input above]'
      }
    }
  }

  optionSelected = () => {
    let selected = document.querySelector('.selection');
    return selected[selected.selectedIndex].value;
  }

  updateGoals = e => {
    let uiGoals = this.state.UI;
    let goalType = this.optionSelected() + '';
    if(e.charCode === 13) {
        uiGoals[goalType] = e.target.value;
        this.setState({UI:uiGoals});
        e.target.value = '';
        this.props.renderApp(uiGoals);
    }
  }


  render () {
    const {UI} = this.state;
    
    return (
      <div id="goals">
        <h2 className="header">My Goals</h2>
        <section className="enter-goal">
          <input
          className='text-goal' type='text' placeholder='Type your goal'
          onKeyPress={this.updateGoals}>
          </input>
          <select className='selection' onClick={this.optionSelected}>
            <option value='weight'>Current Weight</option>
            <option value='goal' >Ideal Weight</option>
            <option value='by'>By</option>
            </select>
        </section>
        <section className="goal-display">
          <article className="goal-box flex-col">
              <i className="fas fa-weight"></i>
            <p className="heading-text dark-text"> Current Weight: <span className='weight'>{UI.weight}</span>
            </p>
          </article>
          <article className="goal-box flex-col">
              <i className="fas fa-running"></i>
            <p className="heading-text dark-text"> Ideal Weight: <span className='goal'>{UI.goal}</span>
            </p>
          </article>
          <article className="goal-box flex-col">
              <i className="fas fa-clock"></i>
            <p className="heading-text dark-text"> By: <span className='by'>{UI.by}</span>
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Goals;
