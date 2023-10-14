import React from 'react';
import Task from "./Task";
import {useSelector,useDispatch} from "react-redux";
import classes from "./TaskCompleted.module.css";
import Button from "./UI/Button/Button";
import {cleanCompletedTask} from "../store/tasksCompletedSlice";
const TaskCompleted = () => {
    const dispatch = useDispatch();
    const tasksCompleted = useSelector(state => state.tasksCompleted.tasksCompleted);
    return (
        <div className={classes.TaskCompleted}>
            <header>
                <h2>Завершенные</h2>
                <Button onClick={() => {
                            dispatch(cleanCompletedTask());
                        }}
                        deleterButton={true}>Очистить
                </Button>
            </header>
            <ul>
                {   tasksCompleted.length?
                    tasksCompleted.map((task) => (
                    <li key={task.id}>
                    <Task disabled={true} key={task.id} {...task} />
                    </li>
                ))
                    :
                    <li>В данный момент нет выполненных задач</li>
                }
            </ul>
        </div>
    );
};

export default TaskCompleted;