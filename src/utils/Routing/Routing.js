import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './../../components/Candidates/Profile'; 
import Candidate from '../../components/Candidates/Candidate'
import CompaniesList from './../../components/Companies/CompaniesList.js'
import Offers from './../../components/Offers/Offers'
import Invitations from './../../components/Invitations/Invitations'
import Bonses from './../../components/Boneses/Bonses'
import Login from './../Logout/Login';
import Home  from './../../components/Home'
import ViewCandidate  from './../../components/Candidates/ViewCandidate'
import CreateCandidate  from './../../components/Candidates/CreateCandidate'
import  RegisterUser  from './../../utils/RegisterUser/userRegister'


  const ConfigRoute = (props) => {
    return(
    <Switch>
                  <Route exact={true} path="/" component={Profile}/>
                  <Route path="/companieslist" component={CompaniesList}/>
                  <Route exact path="/candidate" component={Candidate}/> 
                  <Route path="/candidate/view/:id" component={ViewCandidate}/>
                  <Route path="/candidate/edit/:id" component={CreateCandidate}/>
                  <Route path="/offers" component={Offers}/>    
                  <Route path="/bones" component={Bonses}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/signin" component={RegisterUser}/>
                  <Route path="/invitation" component={Invitations}/>
        </Switch>

    );
  };

  
  export default ConfigRoute;
  