import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.scss';

const todo = [
  {
    id: 1,
    task: 'Complete Todoizt MVP',
    completed: false
  },
  {
    id: 2,
    task: 'Style Todoizt',
    completed: false
  }
]

class App extends React.Component {
  state = {
    todo: todo
  }
  
  handleToggleComplete = (id) => {
    this.setState({
      ...this.setState({
        todo: this.state.todo.map((task) => {
          if(task.id === id) {
            return({
              ...task,
              completed: !task.completed
            });
          } else {
            return(task);
          }
        })
      })
    });
  }

  handleAdd = (task) => {
    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newTodo]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todo: this.state.todo.filter((item) => {
        return(item.completed === false);
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
        <TodoList todo={this.state.todo} handleToggleComplete={this.handleToggleComplete} />
      </div>
    );
  }
}

export default App;