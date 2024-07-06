import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTask = createAction("tasks2/addTask");

const initialState = [];

const taskReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTask, (state, action) => {
    state.push({
      id: crypto.randomUUID(),
      text: action.payload,
      completed: false,
    });
  });
});

export default taskReducer;
