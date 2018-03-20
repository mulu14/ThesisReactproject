import initialState from './../../state/initialStateS'
import {RETURN_PROFILE} from './../../action/actionTypes'

export default function profileReducer(state = initialState.profile, action) {  
    switch(action.type) {
      case types.RETURN_PROFILE:
        return action.profile
      default: 
        return state;
    }
  }