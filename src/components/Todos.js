import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


// function App() {
class Todos extends Component {
  render() {
    return this.props.todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} data_key={index}/>
    ));
  }
}

//PropTypes
Todos.propTypes={
    todos: PropTypes.array.isRequired
}

export default Todos;
