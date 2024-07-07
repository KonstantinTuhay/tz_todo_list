import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        text: action.payload,
        isCompleted: false,
      });
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.isCompleted = !task.isCompleted;
      }
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
