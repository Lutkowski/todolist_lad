import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk('tasks/fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
});
const tasksSlice = createSlice({
    name: 'tasks',
    status: true,
    totalCount: 0,
    initialState: {
        tasks:
            [
                {id: 1, content: 'Задача раз', status: 'В процессе', importance: 'Средняя'},
                {id: 2, content: 'Задача два', status: 'Отложена', importance: 'Важная'},
            ],
    },
    reducers: {
        addTask(state, action) {
            if (action.payload.content.trim().length) {
                state.tasks.push(
                    {
                        id: new Date().getTime(),
                        content: action.payload.content,
                        status: 'Отложена',
                        importance: action.payload.importance
                    }
                )
            }
        },
        deleteTask(state, action) {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = true;
                const transformedArray = action.payload.map(item => ({
                    id: item.id,
                    content: item.title,
                    status: 'Отложена',
                    importance: 'Средняя',
                }));
                state.tasks = transformedArray;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = false;
            });
    },

});


export const {addTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;
