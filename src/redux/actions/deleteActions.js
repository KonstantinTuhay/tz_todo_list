export const DELETE_TODO = "DELETE_TODO";

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
