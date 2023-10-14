import React from 'react';
import classes from "./Header.module.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={classes.myHeader}>
            <nav>
                <ul>
                    <Link to={"/tasks"}>
                        <li>Задачи</li>
                    </Link>
                    <Link to={"/about"}>
                        <li>О проекте</li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;