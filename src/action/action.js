import {requestProfile, receiveProfile, displayErrorMessage, requestIndividualCandidate, createnewCandidate}  from './createAction/createactions'
import axios from 'axios'; 
import fetch from 'cross-fetch' 
import data from './../store/candidate.json'
//const API_URL = 'https://api.myjson.com/bins/10ubtz';   
const API_URL ='https://jsonplaceholder.typicode.com/posts'; 
const API_SINGLE ='https://jsonplaceholder.typicode.com/posts/'; 
const UPDATE_ITEM = 'https://jsonplaceholder.typicode.com/posts/'; 
const CREATE_CANDIDATE = 'https://jsonplaceholder.typicode.com/posts'



var httpHeaders = { 'Content-Type' : 'application/json', 'Accept-Charset' : 'utf-8'};
var createHeaders = new Headers(httpHeaders);


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

export function createNewCandidate(newCandidate){
  return function (dispatch){
    return fetch(CREATE_CANDIDATE, {
      method: 'POST',
      body: JSON.stringify(newCandidate),
      headers: createHeaders
    })
    .then(
      response => response.json(),
    )
    .then(data=>
    dispatch(createnewCandidate(data)))
  }
}



export function updateCandidate(candidate, id){
  fetch(UPDATE_ITEM + id, {
    method: 'PUT',
    body: JSON.stringify(candidate),
    headers: createHeaders
  })
  .then(response => response.json())
  .then(json => console.log(json))

}