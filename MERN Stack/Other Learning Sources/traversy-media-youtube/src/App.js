import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodos from './components/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';
import {v4 as uuidv4} from 'uuid';
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false
      }
    ]
  }

// Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

//Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }

// Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      complete: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
            <><AddTodos addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete = {this.markComplete}
            delTodo={this.delTodo}/></>)} />
            <Route path="/about" component={About} />
            
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
