import {
  REQUEST_PROFILE,
  DELETE_CANDIDATE,
  RECEIVE_PROFILE,
  FETCH_POSTS_FAILURE,
  FETCH_SINGLE_PROFILE,
  CREATE_NEW_CANDIDATE,
  UPDATE_CANDIDATE,
  SORT_CANDIDATE,
  FILTER_CANDIDATE
} from './../actionTypes';

export const requestProfile = () => {
  return {
    type: REQUEST_PROFILE
  };
};

export const receiveProfile = data => {
  return {
    type: RECEIVE_PROFILE,
    data: data
  };
};

export const requestIndividualCandidate = data => {
  return {
    type: FETCH_SINGLE_PROFILE,
    profile: data
  };
};

export const createnewCandidate = data => {
  return {
    type: CREATE_NEW_CANDIDATE,
    candidate: data
  };
};

export const updateCandidat = data => {
  return {
    type: UPDATE_CANDIDATE,
    data: data
  };
};

export const deleteCandidateAction = data => {
  return {
    type: DELETE_CANDIDATE,
    id: data
  };
};

export const sorteCandidate = data => {
  return {
    type: SORT_CANDIDATE,
    data: data
  };
};
export const filterCandidate = data => {
  return {
    type: FILTER_CANDIDATE,
    data: data
  };
};
