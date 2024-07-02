import { ADD_TODO } from "../actions/formActions";
const initialState = {
  todo: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
