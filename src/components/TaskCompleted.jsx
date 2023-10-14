import React from 'react';
import Task from "./Task";
import {useSelector} from "react-redux";
const TaskCompleted = () => {
    const tasksCompleted = useSelector(state => state.tasksCompleted.tasksCompleted);
    return (
        <div>
            <h2>Завершенные</h2>
            <div>
                {tasksCompleted.map((task) => (
                    <Task key={task.id} {...task} />
                ))}
            </div>
        </div>
    );
};

export default TaskCompleted;