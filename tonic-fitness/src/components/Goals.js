import React, { Component } from 'react';

class Goals extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      UI: {
        weight: '',
        goal: '',
        by: ''
      }
    }
  }

  // optionSelected = () => {
  //   let selected = document.querySelector('.selection');
  //   return selected[selected.selectedIndex].value;
  // }
  //
  // updateGoals = e => {
  //   let uiGoals = this.state.UI;
  //   let goalType = this.optionSelected() + '';
  //   if(e.charCode === 13) {
  //       uiGoals[goalType] = e.target.value;
  //       this.setState({UI:uiGoals});
  //       e.target.value = '';
  //       this.props.renderApp(uiGoals);
  //   }
  // }



  render () {
    const { userGoals, handleAddUserGoal } = this.props;

    return (
      <div id="goals">
        <h2 className="header">My Goals</h2>
          <form id="goal-form"
                className="enter-goal"
                onSubmit={handleAddUserGoal}>
            <input className='text-goal'
                   name="weight"
                   type='text'
                   placeholder='Current Weight'>
            </input>
            <input className='text-goal'
                   name="goal"
                   type='text'
                   placeholder='Ideal Weight'>
            </input>
            <input className='text-goal'
                   name="by"
                   type='text'
                   placeholder='When you want to achieve this goal'>
            </input>
            <button type="submit"
                    name="add-goal"
                    id="goal-button"
                    className="submit-button">
              Set/Update Goal
            </button>
          </form>
        <section className="goal-display">
          <article className="goal-box flex-col">
              <i className="fas fa-weight"></i>
            <p className="heading-text dark-text"> Current Weight: <span className='weight'>{userGoals.weight}</span>
            </p>
          </article>
          <article className="goal-box flex-col">
              <i className="fas fa-running"></i>
            <p className="heading-text dark-text"> Ideal Weight: <span className='goal'>{userGoals.goal}</span>
            </p>
          </article>
          <article className="goal-box flex-col">
              <i className="fas fa-clock"></i>
            <p className="heading-text dark-text"> By: <span className='by'>{userGoals.by}</span>
            </p>
          </article>
        </section>
      </div>
    );
  }
}

export default Goals;
