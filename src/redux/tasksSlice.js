import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
};
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            console.log("Current state tasks:", state.tasks); // Log current state tasks
            console.log("Dispatch payload:", action.payload); // Log payload to check what's being dispatched
            state.tasks.push(action.payload);
        },
        toggleComplete: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload);
        }
    },
});



export const { addTask, toggleComplete, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
