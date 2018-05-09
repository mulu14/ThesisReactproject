import {
  RECEIVE_PROFILE,
  CREATE_NEW_CANDIDATE,
  UPDATE_CANDIDATE,
  DELETE_CANDIDATE,
  SORT_CANDIDATE
} from './../../action/actionTypes';

export default function candidateReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return {
        ...state,
        candidates: action.data.candidates
      };
      CREATE_NEW_CANDIDATE: return {
        ...state,
        createNewCandidate: action.candidate
      };
      UPDATE_CANDIDATE: return {
        ...state,
        candidates: state.candidates.map(
          candidate =>
            candidate._id === action.data._id ? candidate : action.data
        )
      };
      DELETE_CANDIDATE: return {
        ...state,
        canidates: state.candidates.filter(
          candidate => candidate._id !== action.data._id
        )
      };
      SORT_CANDIDATE: {
        return {
          ...state,
          candidates: state.candidates.sort((a, b) => {
            return a.publishStatus > b.publishStatus
              ? 1
              : b.publishStatus > a.publishStatus
                ? -1
                : 0;
          })
        };
      }
    default:
      return state;
  }
}
