/*
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './../../components/Candidates/Profile';
import Candidate from '../../components/Candidates/Candidate';
import Offers from './../../components/Offers/Offers';
import Invitations from './../../components/Invitations/Invitations';
import Bonses from './../../components/Boneses/Bonses';
import Company from './../../components/Companies/Company';
import Login from './../Login/Login';
import Logout from './../Logout/logout';
import Home from './../../components/Home';
import ViewCompany from './../../components/Companies/ViewCompany';
import ViewCandidate from './../../components/Candidates/ViewCandidate';
import ViewOffer from './../../components/Offers/offerView';
import CreateCandidate from './../../components/Candidates/CreateCandidate';
import RegisterUser from './../../utils/RegisterUser/userRegister';
import { PrivateRoute } from './privateRoute';
import asyncComponent from './AsyncComponent'
*/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import asyncComponent from './AsyncComponent';
import Loadable from 'react-loadable';
import { withRouter } from 'react-router';

const Loading = () => <div>Loading...</div>;
const AsyncProfile = Loadable({
  loader: () => import('./../../components/Candidates/Profile'),
  loading: Loading
});
const AsyncCandidate = Loadable({
  loader: () => import('./../../components/Candidates/Candidate'),
  loading: Loading
});

const AsyncOffers = Loadable({
  loader: () => import('./../../components/Offers/Offers'),
  loading: Loading
});

const AsyncInvitation = Loadable({
  loader: () => import('./../../components/Invitations/Invitations'),
  loading: Loading
});

const AsyncBonses = Loadable({
  loader: () => import('./../../components/Boneses/Bonses'),
  loading: Loading
});

const AsyncCompany = Loadable({
  loader: () => import('./../../components/Companies/Company'),
  loading: Loading
});

const AsyncEditCompany = Loadable({
  loader: () => import('./../../components/Companies/EditCompany'),
  loading: Loading
});

const AsyncLogin = Loadable({
  loader: () => import('./../Login/Login'),
  loading: Loading
});
const AsyncLogout = Loadable({
  loader: () => import('./../Logout/logout'),
  loading: Loading
});
const AsyncHome = Loadable({
  loader: () => import('./../../components/Home'),
  loading: Loading
});

const AsyncViewCompany = Loadable({
  loader: () => import('./../../components/Companies/ViewCompany'),
  loading: Loading
});
const AsyncViewCandidate = Loadable({
  loader: () => import('./../../components/Candidates/ViewCandidate'),
  loading: Loading
});

const AsyncViewOffer = Loadable({
  loader: () => import('./../../components/Offers/offerView'),
  loading: Loading
});
const AsyncEditCandidate = Loadable({
  loader: () => import('./../../components/Candidates/EditCandidate'),
  loading: Loading
});

const AsyncRegisterUser = Loadable({
  loader: () => import('./../../utils/RegisterUser/userRegister'),
  loading: Loading
});

class ConfigRoute extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact={true} path="/" component={AsyncProfile} />
        <PrivateRoute exact path="/company" component={AsyncCompany} />
        <PrivateRoute path="/company/view/:id" component={AsyncViewCompany} />
        <PrivateRoute path="/company/edit/:id" component={AsyncEditCompany} />
        <PrivateRoute exact path="/candidate" component={AsyncCandidate} />
        <PrivateRoute
          path="/candidate/view/:id"
          component={AsyncViewCandidate}
        />
        <PrivateRoute
          path="/candidate/edit/:id"
          component={AsyncEditCandidate}
        />
        <PrivateRoute path="/offers" component={AsyncOffers} />
        <PrivateRoute path="/offers/view/:id" component={AsyncViewOffer} />
        <PrivateRoute path="/bones" component={AsyncBonses} />
        <Route path="/login" component={AsyncLogin} />
        <Route path="/logout" component={AsyncLogout} />
        <Route path="/signin" component={AsyncRegisterUser} />
        <PrivateRoute path="/invitation" component={AsyncInvitation} />
      </Switch>
    );
  }
}

export default ConfigRoute;
