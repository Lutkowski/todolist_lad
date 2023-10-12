import React, {useMemo, useState} from "react";
import Task from "./components/Task";
import Button from "./components/UI/Button/Button";
import TaskForm from "./components/TaskForm";

function App() {
    const [tasks, setTasks] = useState(
        [
            {id: 1, content: 'Погладить кота', status: 'В процессе', importance: 'Средняя'},
            {id: 2, content: 'Почесать кота', status: 'Отложена', importance: 'Важная'},
        ]
    );
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
    const [taskQuery,setTaskQuery] = useState('');
    const searchedTasks = useMemo(() => {
        return tasks.filter(task => task.content.includes(taskQuery))
        },
        [tasks,taskQuery]);
    const changeQuery = (e) => {
        setTaskQuery(e.target.value);
    };
    return (
        <div className="App">
            <input value={taskQuery} onChange={changeQuery} type="text" placeholder="Найти задачу"/>
            <h1>Сегодня у вас {tasks.length} задач</h1>
            <Button>Добавить задачу</Button>
            {searchedTasks.map((task) => (
                <Task deleteTask={deleteTask} key={task.id} {...task} />
            ))}
            <TaskForm addTask={addTask} length={tasks.length}/>
        </div>
    );
}

export default App;
