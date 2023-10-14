import React from 'react';
import {generateArray} from "../utils/tasks";
import {useSelector} from "react-redux";
import classes from "./Pagination.module.css";

const Pagination = ({setPageNumber}) => {
    const tasks = useSelector(state => state.tasks.tasks);
    const pagesArray = generateArray(Math.ceil(tasks.length / 10));
    const currentPages = (pageNumber) => {
        setPageNumber(pageNumber);
        return (pageNumber);
    }
    return (
        <div className={classes.myPagination}>
            {pagesArray.map(num =>
                <span key={num} onClick={() => currentPages(num)}
                      style={{padding: '5px', border: '2px solid black', cursor: 'pointer'}}>{num}</span>
            )}
        </div>
    );
};

export default Pagination;