import { FETCH_SINGLE_PROFILE } from './../../action/actionTypes';

export default function singleCandidateReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_PROFILE:
      return {
        ...state,
        singleCandidate: action.profile.profile
      };

    default:
      return state;
  }
}
