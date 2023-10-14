import React, {useMemo} from 'react';
import Task from "./Task";
import {useSelector} from "react-redux";

const TaskList = ({taskQuery}) => {
    const tasks = useSelector(state => state.tasks.tasks);
    const searchedTasks = useMemo(() => {
            return tasks.filter(task => task.content.includes(taskQuery))
        },
        [tasks, taskQuery]);
    return (
        <div>
            <h2>Текущие</h2>
            <div>
                {searchedTasks.map((task) => (
                    <Task disabled={false} key={task.id} {...task} />
                ))}
            </div>
        </div>
    );
};

export default TaskList;