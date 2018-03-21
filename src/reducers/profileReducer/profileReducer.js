import initialState from './../../state/initialState'
import {REQUEST_PROFILE} from './../../action/actionTypes'

export default function profileReducer(state = initialState, action) {  
    switch(action.type) {
      
      case REQUEST_PROFILE:

      return { ...state, candidate: [...state.candidate, action.payload] };
      default: 
        return state;
    }
  }