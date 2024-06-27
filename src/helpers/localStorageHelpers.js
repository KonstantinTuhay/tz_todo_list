const localStorageHelpers = {
  setToken: (value) => {
    localStorage.setItem("token", value);
  },
  getToken: (key) => {
    localStorage.getItem(key);
  },
};
export default localStorageHelpers;
