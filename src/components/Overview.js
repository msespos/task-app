import React, { Component } from 'react';
import App from '../App';

class Overview extends Component {
  render() {
    return (
      <ul>
      {this.props.tasks.map((task, index) => {
        return (
          <li key={task.id}>
            {"Task #" + (index + 1) + ": " + task.text}
            <button onClick={() => this.props.deleteTask(task.id)}>Delete</button>
          </li>
        )
      })}
      </ul>      
    )
  }
}

export default Overview
