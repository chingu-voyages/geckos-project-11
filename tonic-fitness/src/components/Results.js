import React from 'react'

const Results = (props) => {
    return (
        <div id='results'>
           {props.weight}
           {props.goal}
           {props.by}

            <section id="landing-container" className="flex-col">
        <div className="display flex-row">
          <article className="flex-col">
              <i className="fas fa-weight"></i>
            <p className="heading-text"> Calories today: </p>
          </article>
          <article className="flex-col">
              <i className="fas fa-chart-line"></i>
            <p className="heading-text"> Current Pace: </p>
          </article>
          <article className="flex-col">
              <i className="fas fa-clock"></i>
            <p className="heading-text"> By: </p>
          </article>
        </div>
      </section>
        </div>
    )
}


export default Results;
