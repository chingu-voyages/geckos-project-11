import React from 'react'

const Results = (props) => {
    return (
        <div>
            Results page.
            {props.user.map(item => {
                return (
                <div>
                    <ul>
                        <li>
                            {item.weight}
                        </li>
                    </ul>
                </div>
                )
            })}
        </div>
    )
}


export default Results;
