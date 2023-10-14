import {createSlice} from "@reduxjs/toolkit";

const tasksCompletedSlice = createSlice({
    name:'tasksCompleted',
    initialState:{
        tasksCompleted:[]
    },
    reducers:{
        addCompletedTask(state,action){
            state.tasksCompleted.push(
                {...action.payload,disabled:true}
            )
        },
    },
})
export const {addCompletedTask} = tasksCompletedSlice.actions;
export default tasksCompletedSlice.reducer;