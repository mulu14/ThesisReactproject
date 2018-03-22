
import {REQUEST_PROFILE, RECEIVE_PROFILE}  from './../actionTypes'



export function requestProfile(profile){
    return { 
        type: REQUEST_PROFILE, 
        profile
        }
  }

 export function receiveProfile(json){
     return{
        type: RECEIVE_PROFILE, 
        profile: json.data.children.map(child => child.data)
     }
 }