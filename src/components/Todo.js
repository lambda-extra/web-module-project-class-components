import React from 'react';
import { Paper } from '@material-ui/core';

const Todo = props => {
    const handleClick = () => {
        props.handleToggleComplete(props.item.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' completed' : ''}`}>
            <Paper className="paper" elevation={3} style={{color: '#FAE62D', backgroundColor: '#191414'}}>{props.item.task}</Paper>
        </div>
    )
};

export default Todo;