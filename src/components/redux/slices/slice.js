import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducer: {
    addTask: (state, action) => {
      state.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTask } = taskSlice.action;
export default taskSlice.reducer;
