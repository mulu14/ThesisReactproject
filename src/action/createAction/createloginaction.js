import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE }  from './../actionTypes'



export  const request =(user) => { 
    return { 
    type: LOGIN_REQUEST, 
    user: user
    } 
}
    
export const success =(user) => {
     return {
        type: LOGIN_SUCCESS,
        user: user
    } 
}

export const failure =(error) =>{
     return { 
         type: LOGIN_FAILURE, 
         error: error
        } 
}

export const logout = (logout) =>{
    return{
        type: LOGOUT, 
        logout: logout
    }
}