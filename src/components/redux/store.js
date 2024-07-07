import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./slices/taskSlice";
import tasksReducer from "./reducers/taskReducer";
import editSlices from "./slices/editSlices";
import editReducer from "./reducers/editReducer";
import previousEditReducer from "./reducers/previousEditReducer";
import previousEditSlice from "./slices/previousEditSlice";

export const store = configureStore({
  reducer: {
    previousEditSlice: previousEditSlice,
    previousEditReducer: previousEditReducer,
    editWithSlice: editSlices,
    editReducer: editReducer,
    tasksSlice: tasksSlice,
    tasksReducer: tasksReducer,
  },
});
