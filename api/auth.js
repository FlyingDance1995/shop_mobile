const login = ($axios, body) => {
  return $axios.post('/auth/login', body)
};

const logout = ($axios) => {
  return $axios.post('/auth/logout')
};

const auth = {
  login,
  logout
};

export default auth;
