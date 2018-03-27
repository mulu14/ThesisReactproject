import initialState from './../../state/initialState'
import {REQUEST_PROFILE, RECEIVE_PROFILE, ERROR_MESSAGE, FETCH_POSTS_FAILURE } from './../../action/actionTypes'


export default function candidateReducer(state = initialState, action) {  
    switch(action.type) {

      case FETCH_POSTS_FAILURE:
      return Object.assign({}, state, {
        didInvalidate: true
      })
      
      case REQUEST_PROFILE:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

      case RECEIVE_PROFILE:
      return {
        ...state, 
        candidate: action.data
      }

      default: 
        return state;
    }
  }