
import { RECEIVE_PROFILE, CREATE_NEW_CANDIDATE , UPDATE_CANDIDATE,  DELETE_CANDIDATE} from './../../action/actionTypes'


export default function candidateReducer(state = {}, action) {  
    switch(action.type) {
      case RECEIVE_PROFILE:
      return {
        ...state, 
        candidates: action.data.items
      }
      CREATE_NEW_CANDIDATE: 
      return{
        ...state,
        createNewCandidate: action.candidate
      }
      UPDATE_CANDIDATE: 
      return {
          ... state,
          candidates: state.candidates.map(candidate => candidate.id === action.data.id ? candidate : action.data)  
      }
      DELETE_CANDIDATE: 
      return{
        canidates: state.candidates.filter(candidate => candidate.id !==action.data.id)
      }
      default: 
        return state;
    }
  }