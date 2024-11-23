import { createSelector, createSlice } from '@reduxjs/toolkit';



const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        addTask: (state, action) => {
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

export const selectCompletedTasks = createSelector(
    (state) => state.tasks,
    (tasks) => tasks.filter((task) => task.completed)
);


export const { addTask, toggleComplete, deleteTask, selectedTask } = tasksSlice.actions;

export default tasksSlice.reducer;
