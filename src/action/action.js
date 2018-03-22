import {REQUEST_PROFILE, RECEIVE_PROFILE}  from './../action/actionTypes'
import axios from 'axios'; 
import fetch from 'cross-fetch' 
const API_URL = 'https://trello-attachments.s3.amazonaws.com/5aa8aab7e01b8b098929e72d/5aa8ab4228ee9068b9edc8cf/09fcac76a37de59c56720908eb66d2ce/candidate.json';   


function requestProfile() {
  return {
    type: REQUEST_PROFILE,
  }
}
 
function receiveProfile(json) {
  return {
    type: RECEIVE_PROFILE,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}
 
 
function fetchPosts() {
  return dispatch => {
    dispatch(requestProfile())
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveProfile(json)))
  }
}
 
function shouldFetchPosts(state) {
  const profile = state.profile
  if (!profile) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}
 
export function fetchPostsIfNeeded() {
  
 
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchPosts())
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}