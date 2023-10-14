import {createSlice} from "@reduxjs/toolkit";

const tasksCompletedSlice = createSlice({
    name: 'tasksCompleted',
    initialState: {
        tasksCompleted: []
    },
    reducers: {
        addCompletedTask(state, action) {

            state.tasksCompleted.push(
                {...action.payload, disabled: true, status: 'Выполнена'}
            )
        },
        cleanCompletedTask(state, action) {
            state.tasksCompleted = [];
        }
    },
})
export const {addCompletedTask, cleanCompletedTask} = tasksCompletedSlice.actions;
export default tasksCompletedSlice.reducer;