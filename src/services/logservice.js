import {authHeader} from './../helper/helper'
export const userService = {
    login,
    logout,
    getById,
    register,
};

 
function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
 
    return fetch('/users/login', requestOptions)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.statusText);
            }
 
            return response.json();
        })
        .then(user => {
            if (user && user.token) {
              
                localStorage.setItem('user', JSON.stringify(user));
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
 
    return fetch('/users/' + id, requestOptions).then(handleResponse);
}


function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
 
    return fetch('/users/register', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }
 
    return response.json();
}