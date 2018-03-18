import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Profile from './Candidates/Profile'; 
import Footer from './../footer/Footer'
import Candidates from './Candidates/Candidates'
import Companies from './Companies/Companies.js'
import Offers from './Offers/Offers'
import Invitations from './Invitations/Invitations'
import Bonses from './Boneses/Bonses'
import Logout from './../utils/Logout'; 
import './Home.css';


class Home extends Component {
  render() {
    return (
    <div className="wrapper">
    <div className="app-header">
      <ul className="nav">     
        <li class="nav-item "><Link to="/profile">Profile</Link></li> 
        <li class="nav-item"><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
    <div className="logo">Logo</div>

    {/*
      link each component to the links
      routing path and link to path has to be the same 
    */}
    <div className="sidebar">
      <ul ul class="nav flex-column">
        <li class="nav-item"><Link to="/">Home</Link></li>   
        <li class="nav-item"><Link to="/companies">Companies</Link></li>   
        <li class="nav-item"><Link to="/candidates">Candidates</Link></li>   
        <li class="nav-item"><Link to="/offers">Offers</Link></li> 
        <li class="nav-item"><Link to="/bones">Boneses</Link></li>   
        <li class="nav-item"><Link to="/invitation">Invitations</Link></li>
        </ul>
     </div>

{/*
 creating Routing for the page
 declaring routing path 
*/}
    <div className="mainbody"> 
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
    
    <div className="footer">
        <h1> Footer </h1>
     </div>
 </div>


      
    );
  }
}

export default Home;
