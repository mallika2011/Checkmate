import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

// function App() {
class App extends Component {
  state= {
    todos:[
      {
        id:1,
        title:'Science Homework',
        completed:false
      },
      {
        id:2,
        title:'Dance Class',
        completed:false
      },
      {
        id:3,
        title:'Bake cookies',
        completed:false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
