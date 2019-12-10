import React, {Component} from 'react';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';

import './App.css';

// function App() {
class App extends Component {
  state= {
    todos:[
      {
        id:uuid.v4(),
        title:'Science Homework',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'Dance Class',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'Bake cookies',
        completed:false
      }
    ]
  }

  //Toggle complete tasks
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {

      if(todo.id===id)
      {
        todo.completed= !todo.completed
      }
      return todo

    }) });
  }

  //Delete Todo

  delTodo = (id) => {

    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)] })

  }

  //Adding a new todo

  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title: title,
      completed:false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddToDo addTodo={this.addTodo}/>  
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
        </div>
      </div>
    );
  }
}

export default App;
