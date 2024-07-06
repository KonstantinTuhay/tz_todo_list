import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      state.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
      });
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
