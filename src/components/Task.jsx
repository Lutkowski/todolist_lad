import React from 'react';
import classes from './Task.module.css'

const Task = (props) => {
    return (
        <div className={classes.task}>
            <div className="task__content">{props.content}</div>
            <div className="task__status">{props.status}</div>
            <div className="task__importance">{props.importance}</div>
            <input type="checkbox"/>
            <button onClick={() => props.deleteTask(props.id)} className="task__delete">Удалить</button>
        </div>
    );
};

export default Task;