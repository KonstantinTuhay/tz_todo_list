import { ADD_NEW_TODO } from "../actions/listActions";
import { DELETE_TODO } from "../actions/deleteActions";

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
    case DELETE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default listReducer;
