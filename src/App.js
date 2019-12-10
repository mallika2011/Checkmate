import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import AddToDo from './components/AddToDo';
import About from './components/pages/About';
import uuid from 'uuid';

import './App.css';

// function App() {
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [
        // {
        //   id: uuid.v4(),
        //   title: 'Science Homework',
        //   completed: false,
        //   inlocal: true
        // },
        // {
        //   id: uuid.v4(),
        //   title: 'Dance Class',
        //   completed: false,
        //   inlocal: true
        // },
        // {
        //   id: uuid.v4(),
        //   title: 'Bake cookies',
        //   completed: false,
        //   inlocal: true
        // }
      ]
    }
  }

  //Toggle complete tasks
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {

        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo

      })
    });
  }

  //Delete Todo
  delTodo = (id,data_key) => {


    // let index = id.target.getAttribute('data-key')
    let index=data_key
    let listValue=JSON.parse(localStorage.getItem('list'));
    listValue.splice(index,1)
    // this.setState({list:listValue});
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    localStorage.setItem('list',JSON.stringify(listValue))

  }

  //Adding a new todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };
    // this.setState({ todos: [...this.state.todos, newTodo] })
    if (localStorage.getItem('list') == null) {
      const list = []
      list.push(newTodo);
      localStorage.setItem("list", JSON.stringify(list))
    }
    else {
      const list = JSON.parse(localStorage.getItem('list'))
      list.push(newTodo)
      localStorage.setItem("list", JSON.stringify(list))
    }
    this.setState({
      todos: JSON.parse(localStorage.getItem('list'))
    });
  }

  componentDidMount() {
    const list = window.localStorage.getItem('list');
    const parsedList = JSON.parse(list);
    if(list == null){
        return false
    }
    else{
        this.setState({
            todos: parsedList,
        })
        console.log(this.state.todos);
    }
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddToDo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
