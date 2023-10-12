import React, {useState} from 'react';
import Button from "./UI/Button/Button";

const TaskForm = (props) => {
    const [taskText, setTaskText] = useState('');
    const [taskPriority, setTaskPriority] = useState('Низкая');
    const handleTextChange = (e) => {
        setTaskText(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setTaskPriority(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({id: props.length + 1, content: taskText, status: 'Отложена', importance: taskPriority});
    };
    return (
        <form style={{display: "flex"}} onSubmit={handleSubmit}>
            <input type="text" onChange={handleTextChange}/>
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