import { ADD_NEW_TODO } from "../actions/listActions";

const initialState = {
  todos: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    default:
      return state;
  }
};

export default listReducer;
