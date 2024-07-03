export const CHANGE_LIST = "CHANGE_LIST";

export const changeList = (change) => {
  return {
    type: CHANGE_LIST,
    payload: change,
  };
};
