export const setToken = (value) => {
  // token = value;
  localStorage.setItem("ed-toke", value);
};

export const getToken = () => {
  return localStorage.getItem("ed-toke");
};

export const loggedIn = !!getToken();
