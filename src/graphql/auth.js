const isAuth = () => {
  const auth = localStorage.getItem("x-auth");
  if (auth) {
    return true;
  }
  return false;
};

export default isAuth;
