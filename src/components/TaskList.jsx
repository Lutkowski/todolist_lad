import React, {useMemo} from 'react';
import Task from "./Task";
import {useSelector} from "react-redux";
import classes from "./TaskList.module.css";

const TaskList = ({currentPage, taskQuery}) => {
    const tasks = useSelector(state => state.tasks.tasks);
    const tasksStatus = useSelector((state) => state.tasks.status);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentTasks = tasks.slice(startIndex, endIndex);
    const searchedTasks = useMemo(() => {
            return currentTasks.filter(task => task.content.includes(taskQuery))
        },
        [currentTasks, taskQuery]);
    return (
        <div className={classes.myTaskList}>
            <h2>Текущие</h2>
            <ul>
                {tasksStatus === true || tasksStatus === undefined ?
                    searchedTasks.map((task) => (
                        <li key={task.id}><Task disabled={false} key={task.id} {...task} /></li>
                    ))
                    :
                    <li>Посты не загружены</li>
                }
            </ul>
        </div>
    );
};

export default TaskList;