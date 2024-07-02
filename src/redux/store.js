import { legacy_createStore as createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import formReducer from "./reducers/formReducer";
import listReducer from "./reducers/listReducer";

const rootReducer = combineReducers({
  form: formReducer,
  list: listReducer,
});

const store = createStore(rootReducer);

export default store;
