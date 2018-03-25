import {requestProfile, receiveProfile}  from './createAction/requestProfile'
import axios from 'axios'; 
import fetch from 'cross-fetch' 
const API_URL = 'https://api.myjson.com/bins/10ubtz';   

//const API_URL = 'https://jsonplaceholder.typicode.com/posts'; 



export function feachProfiles (){
  return (dispatch) => {
    dispatch(requestProfile())
    return fetch(API_URL)
      .then(response => response.json())
      .then(data => dispatch(receiveProfile(data)))
  }
}

