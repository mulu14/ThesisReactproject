import {
  receiveCompany,
  getsingleCompany,
  createCompnay,
  updateCompany,
  deleteCompany
} from './createAction/createcompanyaction';
import fetch from 'cross-fetch';
//import { receiveProfile } from './createAction/createactions';

var httpHeaders = {
  'Content-Type': 'application/json',
  'Accept-Charset': 'utf-8'
};
var createHeaders = new Headers(httpHeaders);

const API_URL = 'http://localhost:8080/companies';

export function getCompanies() {
  return function(dispatch) {
    dispatch(receiveCompany);
    return fetch(API_URL)
      .then(response => response.json())
      .then(json => dispatch(receiveCompany(json)));
  };
}

export function getSingleCompany(id) {
  return function(dispatch) {
    return fetch(API_URL + '/' + id)
      .then(response => response.json(), response => console.log(response))
      .then(data => dispatch(getsingleCompany(data)));
  };
}

export function createNewCompany(newCompany) {
  return function(dispatch) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newCompany),
      headers: createHeaders
    })
      .then(response => response.json())
      .then(data => dispatch(createCompnay(data)));
  };
}

export function updateCompanies(newCompany) {
  return function(dispatch) {
    return fetch(API_URL + '/' + newCompany.id, {
      method: 'PUT',
      body: JSON.stringify(newCompany),
      headers: createHeaders
    })
      .then(response => response.json())
      .then(data => dispatch(updateCompany(data)));
  };
}

export function deleteCompanies(id) {
  return function(dispatch) {
    return fetch(API_URL + '/' + id, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => dispatch(deleteCompany(data)));
  };
}
