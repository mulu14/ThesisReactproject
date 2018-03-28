import initialState from './../../state/initialState'
import {REQUEST_PROFILE, RECEIVE_PROFILE, ERROR_MESSAGE, FETCH_POSTS_FAILURE, CREATE_NEW_CANDIDATE , UPDATE_CANDIDATE} from './../../action/actionTypes'


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
        candidates: action.data
      }

      CREATE_NEW_CANDIDATE: 
      return{
        ...state, 
        createNewCandidate: action.data
      }
      UPDATE_CANDIDATE: 
      return {
          ... state,
          candidates: state.candidate.map(candidate => candidate.id === action.data.id ? candidate : action.data),  
      }

      default: 
        return state;
    }
  }