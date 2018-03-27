
import initialState from './../../state/initialState'
import {FETCH_SINGLE_PROFILE} from './../../action/actionTypes'

export default function singleCandidateReducer(state = initialState, action) {  
    switch(action.type) {
      case  FETCH_SINGLE_PROFILE:
      return {
        ...state, 
        singleCandidate: action.data
      }

      default: 
        return state;
    }
  }