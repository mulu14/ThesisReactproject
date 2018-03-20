
import {RETURN_PROFILE}  from './../actionTypes'



export function Readprofile(profile) {
    return { 
        type: RETURN_PROFILE, 
        profile }
  }