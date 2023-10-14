import React, {useState} from 'react';
import Button from "./UI/Button/Button";
import {useDispatch} from "react-redux";
import {addTask} from "../store/tasksSlice";
const TaskForm = (props) => {
    const [taskText, setTaskText] = useState('');
    const [taskPriority, setTaskPriority] = useState('Низкая');
    const dispatch = useDispatch();
    const handleTextChange = (e) => {
        setTaskText(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setTaskPriority(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({id: props.length + 1, content: taskText, status: 'Отложена', importance: taskPriority}));
        setTaskText('');
    };
    return (
        <form style={{display: "flex"}} onSubmit={handleSubmit}>
            <input type="text" value={taskText} onChange={handleTextChange}/>
            <select onChange={handlePriorityChange}>
                <option value="Низкая">Низкая</option>
                <option value="Средняя">Средняя</option>
                <option value="Высокая">Высокая</option>
            </select>
            <Button>Добавить задачу</Button>
        </form>
    );
};

export default TaskForm;