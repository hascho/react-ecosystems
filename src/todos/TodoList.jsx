import React from 'react';
import { connect } from 'react-redux';
import NewTodoForm from './NewTodoForm.jsx';
import TodoListItem from './TodoListItem.jsx';
import {
  removeTodo,
  markTodoAsCompleted,
} from './actions';
import './TodoList.css';

const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
}) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo, i) =>
      <TodoListItem
        key={i}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onCompletedPressed={onCompletedPressed} />)}
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
