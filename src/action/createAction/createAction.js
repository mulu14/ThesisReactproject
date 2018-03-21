
import {REQUEST_PROFILE}  from './../actionTypes'



export function Requestprofile(candidate) {
    return { 
        type: REQUEST_PROFILE, 
        payloade: candidate}
  }