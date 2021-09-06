import React from 'react';
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
];

class App extends React.Component {
  state = {
    todo: todo
  }
  
  handleAdd = task => {
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
      todo: this.state.todo.filter(item => {
        return(item.completed === false);
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;