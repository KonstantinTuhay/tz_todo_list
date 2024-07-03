import { ADD_CHANGE_ACTIONS } from "../actions/addChangeActions";
const initialState = {
  text: "",
};

const addChangeTextReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHANGE_ACTIONS:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default addChangeTextReducer;
