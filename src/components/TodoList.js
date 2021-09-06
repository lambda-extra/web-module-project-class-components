import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {props.todo.map(item => (
                <Todo key={item.id} item={item} handleToggleComplete={props.handleToggleComplete} />
        ))}
        </div>
    )
}

export default TodoList;