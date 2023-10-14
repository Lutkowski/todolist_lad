import React from 'react';
import classes from './Task.module.css'
import {deleteTask} from "../store/tasksSlice";
import {useDispatch} from "react-redux";
import {addCompletedTask} from "../store/tasksCompletedSlice";


const Task = (props) => {
    const dispatch = useDispatch();
    return (
        <div className={classes.task}>
            <div className="task__content">{props.content}</div>
            <select disabled={props.disabled} className="task__status">
                <option>{props.status}</option>
                {[{key:1,status:'В процессе'}, {key:2,status:'Отложена'}].map(status =>
                    status.status !== props.status ?
                        <option key={status.key}>{status.status}</option> : undefined)}
            </select>
            <select disabled={props.disabled} className="task__importance">
                <option>{props.importance}</option>
                {[{key: 1, importanceLevel: 'Низкая'}, {key:2, importanceLevel: 'Средняя'}, {
                    key:3,
                    importanceLevel: 'Важная'
                }].map(importance =>
                    importance.importanceLevel !== props.importance ?
                        <option key={importance.key}>{importance.importanceLevel}</option> : undefined)}
            </select>
            <input disabled={props.disabled} onChange={() => {
                dispatch(addCompletedTask(props))
                dispatch(deleteTask(props.id))
            }} type="checkbox"/>
            <button disabled={props.disabled} onClick={() =>
            {
                dispatch(deleteTask(props.id))
            }} className="task__delete">Удалить</button>
        </div>
    );
};

export default Task;