import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './../../components/Candidates/Profile'; 
import CandidatesList from '../../components/Candidates/CandidatesList'
import CompaniesList from './../../components/Companies/CompaniesList.js'
import Offers from './../../components/Offers/Offers'
import Invitations from './../../components/Invitations/Invitations'
import Bonses from './../../components/Boneses/Bonses'
import Logout from './../Logout/Logout';
import Home  from './../../components/Home'


  const ConfigRoute = (props) => {
    return(
    <Switch>
                  <Route exact={true} path="/" component={Profile}/>
                  <Route path="/companieslist" component={CompaniesList}/>
                  <Route path="/candidateslist" component={CandidatesList}/>
                  <Route path="/offers" component={Offers}/>    
                  <Route path="/bones" component={Bonses}/>
                  <Route path="/logout" component={Logout}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/invitation" component={Invitations}/>
        </Switch>

    );
  };

  
  export default ConfigRoute;
  