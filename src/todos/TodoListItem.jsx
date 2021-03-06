import React from 'react';
import { connect } from 'react-redux';
import './TodoListItem.css'

const TodoListItem = ({
  todo,
  onRemovePressed,
  onCompletedPressed,
}) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      {todo.isCompleted
        ? null
        : <button
            onClick={() => onCompletedPressed(todo.text)}
            className="completed-button">Mark as Completed</button>}
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="remove-button">Remove</button>
    </div>
  </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListItem);
