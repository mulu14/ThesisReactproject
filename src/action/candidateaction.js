import {
  requestProfile,
  receiveProfile,
  updateCandidat,
  requestIndividualCandidate,
  createnewCandidate,
  deleteCandidateAction
} from './../action/createAction/createCandidateactions';
import fetch from 'cross-fetch';
const API_URL = 'http://localhost:8080/candidates';

var httpHeaders = {
  'Content-Type': 'application/json',
  'Accept-Charset': 'utf-8'
};
var createHeaders = new Headers(httpHeaders);

export function feachProfiles() {
  return function(dispatch) {
    dispatch(requestProfile);
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveProfile(json)));
  };
}

export function feachSingleCandidate(id) {
  return function(dispatch) {
    return fetch(API_URL + '/' + id)
      .then(response => response.json(), response => console.log(response))
      .then(data => dispatch(requestIndividualCandidate(data)));
  };
}

export function createNewCandidate(newCandidate) {
  return function(dispatch) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newCandidate),
      headers: createHeaders
    })
      .then(response => response.json())
      .then(data => dispatch(createnewCandidate(data)));
  };
}

export function updateCandidate(newCandidate) {
  return function(dispatch) {
    return fetch(API_URL + '/' + newCandidate.id, {
      method: 'PUT',
      body: JSON.stringify(newCandidate),
      headers: createHeaders
    })
      .then(response => response.json())
      .then(data => dispatch(updateCandidat(data)));
  };
}

export function deleteCandidate(id) {
  return function(dispatch) {
    return fetch(API_URL + '/' + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => dispatch(deleteCandidateAction(data)));
  };
}
