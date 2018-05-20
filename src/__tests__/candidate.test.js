import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Candidate from './../components/Candidates/Candidate';
import CandidateList from './../components/Candidates/CandidateList';
import { Provider } from 'react-redux';
import {
  receiveProfile,
  requestIndividualCandidate
} from './../action/createAction/createCandidateactions';
import { RECEIVE_PROFILE, FETCH_SINGLE_PROFILE } from './../action/actionTypes';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});
const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);

describe('<Candidate/>', () => {
  it('Should render the component render without error ', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Candidate />
        </Provider>
      ).exists(<h1>Test page</h1>)
    ).toBe(true);
  });
});

describe('actions', () => {
  it('Create receive profiles action', () => {
    const data = 'data';
    const expectedAction = {
      type: RECEIVE_PROFILE,
      data
    };
    expect(receiveProfile(data)).toEqual(expectedAction);
  });
});

describe('actions', () => {
  it('Create single profile request', () => {
    const profile = 'profile';
    const expectedAction = {
      type: FETCH_SINGLE_PROFILE,
      profile
    };
    expect(requestIndividualCandidate(profile)).toEqual(expectedAction);
  });
});

describe('<Candidate/>', () => {
  it('should render without throwing an error', () => {
    expect(
      shallow(
        <Provider store={store}>
          <Candidate />
        </Provider>
      ).exists(<h1>Test page</h1>)
    ).toBe(true);
  });
});
