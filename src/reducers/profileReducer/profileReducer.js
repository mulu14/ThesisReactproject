import initialState from './../../state/initialState'
import {REQUEST_PROFILE, RECEIVE_PROFILE} from './../../action/actionTypes'

export default function profileReducer(state = initialState, action) {  
    switch(action.type) {
      case RECEIVE_PROFILE:
      return {
        ...state, 
        candidate: action.paylode
      }
      default: 
        return state;
    }
  }