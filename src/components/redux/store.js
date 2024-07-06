import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/taskSlice";
import tasksReducer from "./reducers/reduce";

export const store = configureStore({
  reducer: {
    tasksSlice: tasksSlice,
    tasksReducer: tasksReducer,
  },
});
