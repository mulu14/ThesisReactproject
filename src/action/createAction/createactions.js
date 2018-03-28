
import {REQUEST_PROFILE, RECEIVE_PROFILE, FETCH_POSTS_FAILURE, FETCH_SINGLE_PROFILE, CREATE_NEW_CANDIDATE, UPDATE_CANDIDATE}  from './../actionTypes'



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

 export const displayErrorMessage =(error) =>{
     return{
         type: FETCH_POSTS_FAILURE, 
         text: error
     }
 }

 export const requestIndividualCandidate =(searchId) =>{
     return{
         type: FETCH_SINGLE_PROFILE, 
         id: searchId
     }
 }

 export const createnewCandidate =(newcandidate) => {
     return{
         type: CREATE_NEW_CANDIDATE,
         candidate: newcandidate
     }
 }

 export const updateCandidat =(data) =>{
     return{
         type: UPDATE_CANDIDATE,
         candidate: data
     }

 }