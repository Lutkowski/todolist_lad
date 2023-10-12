import React from 'react';
import classes from './Button.module.css'
const Button = ({children,...props}) => {
    return (
        <div>
            <button {...props} className={classes.add__button}>
                {children}
            </button>
        </div>
    );
};

export default Button;