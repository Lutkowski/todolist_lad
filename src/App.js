import React, {useState} from "react";
import Button from "./components/UI/Button/Button";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import {useSelector, useDispatch} from "react-redux";
import TaskCompleted from "./components/TaskCompleted";
import {fetchTodos} from "./store/tasksSlice";
function App() {
    const [taskQuery,setTaskQuery] = useState('');
    const changeQuery = (e) => {
        setTaskQuery(e.target.value);
    };
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();
    const handleFetchTasks = () => {
        dispatch(fetchTodos()); // Вызовите действие для загрузки задач с сервера
    };
    return (
        <div className="App">
            <input value={taskQuery} onChange={changeQuery} type="text" placeholder="Найти задачу"/>
            <h1>Сегодня у вас {tasks.length} задач</h1>
            <Button>Добавить задачу</Button>
            <Button onClick={handleFetchTasks} style={{marginTop:'5px'}}>Подгрузить задачи с сервера</Button>
            <TaskList taskQuery={taskQuery}></TaskList>
            <TaskForm length={tasks.length}/>
            <TaskCompleted></TaskCompleted>
        </div>
    );
}

export default App;
