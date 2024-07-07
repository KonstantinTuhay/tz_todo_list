import { createAction, createReducer } from "@reduxjs/toolkit";

export const addTask = createAction("task2/editTask");

const initialState = "";

const addReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTask, (state, action) => {
    return (state = action.payload);
  });
});

export default addReducer;
