import { EDIT_TODO } from "../actions/editActions";

const initialState = {
  id: "",
};

const editReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TODO:
      return { id: action.payload };
    default:
      return state;
  }
};

export default editReducer;
