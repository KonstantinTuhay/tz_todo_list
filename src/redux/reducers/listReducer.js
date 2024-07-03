import { ADD_NEW_TODO } from "../actions/listActions";
import { DELETE_TODO } from "../actions/deleteActions";
import { TOGGLE_TODO } from "../actions/toggleActions";
import { CHANGE_LIST } from "../actions/changeListAction";

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
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isCompleted: !todo.isCompleted }
            : { ...todo }
        ),
      };
    case CHANGE_LIST:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : { ...todo }
        ),
      };
    default:
      return state;
  }
};

export default listReducer;
