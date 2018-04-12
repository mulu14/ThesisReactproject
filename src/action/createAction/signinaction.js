import {USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS, USERS_REGISTER_FAILURE } from './../actionTypes'

export function signinrequest(user) {
    return {
         type: USERS_REGISTER_REQUEST, 
         user: user
         } 
    }

    
export function signinsuccess(user) { 
    return{ 
        type:  USERS_REGISTER_SUCCESS, 
        user: user
    } 

    }
export function signinfailure(error) { 
    return { 
    type:  USERS_REGISTER_FAILURE,
     error: error
    } 
    }