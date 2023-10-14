import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import tasksCompletedReducer from './tasksCompletedSlice'
export default configureStore({
    reducer:{
        tasks:tasksReducer,
        tasksCompleted:tasksCompletedReducer,
    }
});