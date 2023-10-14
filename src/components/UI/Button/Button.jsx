import React from 'react';
import classes from './Button.module.css'

const Button = ({children, deleterButton, ...props}) => {
    return (
        <div>
            <button {...props} className={deleterButton ? classes.deleterButton : classes.myButton}>
                {children}
            </button>
        </div>
    );
};

export default Button;