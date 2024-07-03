import { ADD_TODO } from "../actions/formActions";
const initialState = {
  text: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
