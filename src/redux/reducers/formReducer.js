import { ADD_TODO } from "../actions/formActions";
const initialState = {
  todo: "",
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
