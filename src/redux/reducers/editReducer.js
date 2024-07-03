import { EDIT_TODO } from "../actions/editActions";

const initialState = {
  id: {},
};

const editReducer = (state = initialState, action) => {
  //   console.log(state);
  switch (action.type) {
    case EDIT_TODO:
      return { id: { [action.payload]: true } };
    default:
      return state;
  }
};

export default editReducer;
