import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT }  from './../actionTypes'


export  const loginrequest =(user) => { 
    return { 
    type: LOGIN_REQUEST, 
    user: user
    } 
}
    
export const loginsuccess =(user) => {
     return {
        type: LOGIN_SUCCESS,
        user: user
    } 
}

export const loginfailure =(error) =>{
     return { 
         type: LOGIN_FAILURE, 
         error: 'Invalid email or password'
        } 
}

export const logout = (logout) =>{
    return{
        type: LOGOUT, 
        logout: logout
    }
}