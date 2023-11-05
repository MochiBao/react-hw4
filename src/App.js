import React, { Component } from "react";
import TaskList from "./components/task/taskList/TaskList";
import Form from "./components/form/Form";

export default class App extends Component {
  state = {
    tasks: [
      {id:1, text: "Завдання 1"},
      {id:2, text: "Завдання 2"},
      {id:3, text: "Завдання 3"},
    ]
  };

  plusTask = (task) => {
    this.setState((prev) => ({
      tasks: [...prev.tasks, task]
    }))
  };
  
  render () {
    const {tasks} = this.state;
    return (
      <>
      <TaskList data={tasks}/>
      <Form plusTask={this.plusTask}/>
      </>
    )
  }
};