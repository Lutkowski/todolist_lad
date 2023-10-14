import React from 'react';
import classes from "./Search.module.css";

const Search = (props) => {
    return (
        <input className={classes.mySearch} {...props} />
    );
};

export default Search;