import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [
      { id: 1, text: 'Watch video on actions & reducers', complete: true },
      { id: 2, text: 'Follow redux codealong', complete: true },
      { id: 3, text: 'Fork weekly assignment', complete: true },
      { id: 4, text: 'Create a todo app', complete: false },
    ],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.list.length + 1,
        text: action.payload,
        complete: false,
      };
      state.list.push(newTask);
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.list.find((t) => t.id === taskId);
      if (task) {
        task.complete = !task.complete;
      }
    },
    removeTask: (state, action) => {
      const taskId = action.payload;
      state.list = state.list.filter((t) => t.id !== taskId);
    },
  },
});

export const { addTask, toggleTask, removeTask } = tasksSlice.actions;
export const selectTasks = (state) => state.tasks.list;

export default tasksSlice.reducer;
