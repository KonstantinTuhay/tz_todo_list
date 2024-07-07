import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "tasks",
  initialState: "",
  reducers: {
    addTask: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addTask } = addSlice.actions;
export default addSlice.reducer;
