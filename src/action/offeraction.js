import {
  createOffer,
  updateOffer,
  getallOfffers,
  deletOffer,
  getsingleOfffer
} from './createAction/createofferaction';
import fetch from 'cross-fetch';

var httpHeaders = {
  'Content-Type': 'application/json',
  'Accept-Charset': 'utf-8'
};
var createHeaders = new Headers(httpHeaders);

const API_URL = 'http://localhost:8080/offers';

export function getOffers() {
  return function(dispatch) {
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(getallOfffers(json)));
  };
}

export function getSingleOffer(id) {
  return function(dispatch) {
    return fetch(API_URL + '/' + id)
      .then(response => response.json())
      .then(data => dispatch(getsingleOfffer(data)));
  };
}

export function createNewOffer(newOffer) {
  return function(dispatch) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newOffer),
      headers: createHeaders
    })
      .then(response => response.json())
      .then(data => dispatch(createOffer(data)));
  };
}

export function updateOffiers(updatedOffer) {
  return function(dispatch) {
    return fetch(API_URL + '/' + updatedOffer.id, {
      method: 'PUT',
      body: JSON.stringify(updatedOffer),
      headers: createHeaders
    })
      .then(response => response.json())
      .then(data => dispatch(updateOffer(data)));
  };
}

export function deleteOffers(id) {
  return function(dispatch) {
    return fetch(API_URL + '/' + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => dispatch(deletOffer(data)));
  };
}
