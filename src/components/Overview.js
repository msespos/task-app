import React, { Component } from 'react';

class Overview extends Component {
  render() {
    return (
      <div>
        {
          this.props.tasks.map((task, index) => {
            return <p key={index}>{"Task #" + (index + 1) + ": " + task}</p>
          })
        }
      </div>  
    )
  }
}

export default Overview
