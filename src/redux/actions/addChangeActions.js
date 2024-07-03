export const ADD_CHANGE_ACTIONS = "ADD_CHANGE_ACTIONS";

export const addChangeText = (text) => {
  return {
    type: ADD_CHANGE_ACTIONS,
    payload: text,
  };
};
