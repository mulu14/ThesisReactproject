
import initialState from './../../state/initialState'
import {FETCH_SINGLE_PROFILE} from './../../action/actionTypes'

export default function singleCandidateReducer(state = {}, action) {  
    switch(action.type) {
      case  FETCH_SINGLE_PROFILE:
      return {
        ...state, 
        singleCandidate: action.profile
      }

      default: 
        return state;
    }
  }