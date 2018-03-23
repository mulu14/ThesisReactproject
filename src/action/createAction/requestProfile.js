
import {REQUEST_PROFILE, RECEIVE_PROFILE}  from './../actionTypes'



export const requestProfile =()=>{
    return { 
        type: REQUEST_PROFILE, 
        }
  }

 export const receiveProfile =(json)=>{
     return{
        type: RECEIVE_PROFILE, 
        json
     }
 }