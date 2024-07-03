import { legacy_createStore as createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import formReducer from "./reducers/formReducer";
import listReducer from "./reducers/listReducer";
import editReducer from "./reducers/editReducer";
import addChangeTextReducer from "./reducers/addChangeTextReducer";

const rootReducer = combineReducers({
  form: formReducer,
  list: listReducer,
  edit: editReducer,
  change: addChangeTextReducer,
});

const store = createStore(rootReducer);

export default store;
