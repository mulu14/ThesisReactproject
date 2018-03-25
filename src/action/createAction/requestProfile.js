
import {REQUEST_PROFILE, RECEIVE_PROFILE, ERROR_MESSAGE}  from './../actionTypes'



export const requestProfile =()=>{
    return { 
        type: REQUEST_PROFILE, 
        }
  }

 export const receiveProfile =(data)=>{
     return{
        type: RECEIVE_PROFILE, 
        data: data
     }
 }

 export const displayErrorMessage =(msg) =>{
     return{
         type: ERROR_MESSAGE, 
         text: msg
     }
 }