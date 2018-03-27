import {requestProfile, receiveProfile, displayErrorMessage, requestIndividualCandidate}  from './createAction/createactions'
import axios from 'axios'; 
import fetch from 'cross-fetch' 
//const API_URL = 'https://api.myjson.com/bins/10ubtz';   
const API_URL ='https://jsonplaceholder.typicode.com/posts'; 
const API_SINGLE ='https://jsonplaceholder.typicode.com/posts/'; 
const UPDATE_ITEM = ''; 





export function feachProfiles() {
  return function (dispatch) {
    dispatch(requestProfile)
    return fetch(API_URL)
      .then(
        response => response.json(),
      )
      .then(json =>
        dispatch(receiveProfile(json))
      )
  }
}


export function feachSingleCandidate(id){
  return function (dispatch){
    return fetch(API_SINGLE + id)
    .then(
      response => response.json(),
    )
    .then(data=>
    dispatch(requestIndividualCandidate(data)))
  }
}


export function updateCandidate(){
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))

}