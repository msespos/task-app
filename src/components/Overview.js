import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <ul>
      {this.props.tasks.map((task) => {
        return <li key={task.id}>{"Task #" + (task.number) + ": " + task.text}</li>
      })}
      </ul>      
    )
  }
}

export default Overview
