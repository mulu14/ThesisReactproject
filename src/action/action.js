import {requestProfile, receiveProfile}  from './createAction/requestProfile'
import axios from 'axios'; 
import fetch from 'cross-fetch' 
const API_URL = 'https://trello-attachments.s3.amazonaws.com/5aa8aab7e01b8b098929e72d/5aa8ab4228ee9068b9edc8cf/09fcac76a37de59c56720908eb66d2ce/candidate.json';   




export function feachProfiles (){
  return (dispatch) => {
    dispatch(requestProfile())
    return fetch(API_URL,{
      headers: {
        'content-type': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:3000'

      },
    })
      .then(response => response.json())
      .then(profiles => dispatch(receiveProfile(profiles)))
  }
}

