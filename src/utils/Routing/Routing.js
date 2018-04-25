import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './../../components/Candidates/Profile'; 
import Candidate from '../../components/Candidates/Candidate'
import Offers from './../../components/Offers/Offers'
import Invitations from './../../components/Invitations/Invitations'
import Bonses from './../../components/Boneses/Bonses'
import Company from './../../components/Companies/Company'
import Login from './../Login/Login';
import Logout from './../Logout/logout'
import Home  from './../../components/Home'
import ViewCompany from './../../components/Companies/ViewCompany'
import ViewCandidate  from './../../components/Candidates/ViewCandidate'
import ViewOffer from './../../components/Offers/offerView'
import CreateCandidate  from './../../components/Candidates/CreateCandidate'
import  RegisterUser  from './../../utils/RegisterUser/userRegister'
import  {PrivateRoute} from './privateRoute'


  const ConfigRoute = (props) => {
    return(
    <Switch>
                  <PrivateRoute exact={true} path="/" component={Profile}/>
                  <PrivateRoute exact path="/company" component={Company} />
                  <PrivateRoute path="/company/view/:id" component={ViewCompany}/>
                  <PrivateRoute exact path="/candidate" component={Candidate}/> 
                  <PrivateRoute path="/candidate/view/:id" component={ViewCandidate}/>
                  <PrivateRoute path="/candidate/edit/:id" component={CreateCandidate}/>
                  <PrivateRoute path="/offers" component={Offers}/>  
                  <PrivateRoute path="/offers/view/:id" component={ViewOffer}/>     
                  <PrivateRoute path="/bones" component={Bonses}/>
                  <Route path="/login" component={Login}/>
                  <Route path="/logout" component={Logout}/>
                  <Route path="/signin" component={RegisterUser}/>
                  <PrivateRoute path="/invitation" component={Invitations}/>
        </Switch>

    );
  };

  
  export default ConfigRoute;
  