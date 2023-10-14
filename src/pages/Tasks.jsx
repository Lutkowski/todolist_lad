import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Search from "../components/UI/Search/Search";
import Button from "../components/UI/Button/Button";
import TaskList from "../components/TaskList";
import Pagination from "../components/Pagination";
import TaskCompleted from "../components/TaskCompleted";
import {fetchTodos} from "../store/tasksSlice";
import TaskForm from "../components/UI/Form/TaskForm";

function Tasks() {
    const [taskQuery, setTaskQuery] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const changeQuery = (e) => {
        setTaskQuery(e.target.value);
    };
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();
    const handleFetchTasks = () => {
        dispatch(fetchTodos());
    };

    return (
        <div className="App">
            <Search value={taskQuery} onChange={changeQuery} type="text" placeholder="Найти задачу"/>
            <h1>Сегодня у вас {tasks.length} задач</h1>
            <Button onClick={handleFetchTasks}>Подгрузить задачи с сервера</Button>
            <TaskList currentPage={pageNumber} taskQuery={taskQuery}></TaskList>
            <Pagination setPageNumber={setPageNumber}></Pagination>
            <TaskForm length={tasks.length}/>
            <TaskCompleted></TaskCompleted>
        </div>
    );
}

export default Tasks;
