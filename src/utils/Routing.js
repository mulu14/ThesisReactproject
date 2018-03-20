import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Profile from './../components/Candidates/Profile'; 
import Candidates from './../components/Candidates/Candidates'
import Companies from './../components/Companies/Companies.js'
import Offers from './../components/Offers/Offers'
import Invitations from './../components/Invitations/Invitations'
import Bonses from './../components/Boneses/Bonses'
import Logout from './Logout';


  const ConfigRoute = () => (
    <div > 
       <Switch>
                  <Route exact={true} path="/" component={Profile}/>
                  <Route path="/companies" component={Companies}/>
                  <Route path="/candidates" component={Candidates}/>
                  <Route path="/offers" component={Offers}/>    
                  <Route path="/bones" component={Bonses}/>
                  <Route path="/logout" component={Logout}/>
                  <Route path="/profile" component={Profile}/>
                  <Route path="/invitation" component={Invitations}/>
        </Switch>


    </div>
    
  );

  export default ConfigRoute ; 