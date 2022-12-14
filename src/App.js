import Overview from './components/Overview';
import React, { Component } from 'react';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      task: {
        text: "",
        id: uniqid(),
      }
    }

    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: "",
        id: uniqid(),
      },
      taskToRemove: {}
    });
  }

  removeObjectById(array, id) {
    const objWithIdIndex = array.findIndex((obj) => obj.id === id);
    if (objWithIdIndex > -1) {
      array.splice(objWithIdIndex, 1);
    }
    return array;
  }

  deleteTask(id) {
    this.setState({
      tasks: this.removeObjectById(this.state.tasks, id)
    })
  }

  handleChange(event) {
    this.setState({
      task: {
        text: event.target.value,
        id: this.state.task.id,
      }
    });
  }

  render() {
    const { tasks, task } = this.state;

    return (
      <div>
        <form onSubmit={this.addTask}>
          <input 
            type="text"
            value={task.text}
            onChange={this.handleChange}
          />
          <button type="submit">Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={this.deleteTask} />
      </div>
    );
  };
}

export default App;
