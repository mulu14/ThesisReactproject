import { authHeader } from './../helper/auth';
export const userService = {
  login,
  getById,
  register,
  logout
};

const URL_SIGNIN = 'http://localhost:8080/users/signup';
const URL_LOGIN = 'http://localhost:8080/users/login';
const URL_SINGL_USER = 'http://localhost:8080/users/';

function login(email, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  };

  return fetch(URL_LOGIN, requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText);
      }
      return response.json();
    })
    .then(user => {
      if (user && user.token) {
        localStorage.setItem('user', user.token);
        //console.log(user.token);
      }

      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
}

function getById(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(URL_SINGL_USER + id, requestOptions).then(handleResponse);
}

function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(URL_SIGNIN, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  return response.json();
}
