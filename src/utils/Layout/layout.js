import React, {Component} from 'react';
import { Link} from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Footer from './../../footer/Footer'
import ConfigRoute from './../Routing/Routing'
import Divider from 'material-ui/Divider';
import Badge from 'material-ui/Badge';
import {Add, Home, Dashboard, Notifications, AccountCircle, LocalOffer, InsertInvitation, 
  People, Business, Payment, KeyboardArrowRight, Search, KeyboardArrowDown, Email} from 'material-ui-icons'; 
import './layout.css'
class Layout extends Component {

  constructor(props){
    super(props)

  this.state = { 
    closedDashbord:true, 
    closedHome: true,
    closedCandidates: true,
    closedOffers: true, 
    closedBonses: true, 
    closedInviation: true, 
    notification: 10, 
    emailnotification: 5, 
    notificationUrgent : 4, 
  
  };
  }

  handleExpandClick = () => {
    this.setState({ closedDashbord: !this.state.closedDashbord });
  };



  render(){

    const user = localStorage.getItem('user'); 
   
    console.log(user); 
    console.log(user!=null); 
    const isclosed = this.state.closedDashbord
     
    const buttonExpand = isclosed?  <KeyboardArrowRight/> : <KeyboardArrowDown/> 
    
    const showDashcontent = isclosed? null:  
    <List> 
       <ListItem> Link to page </ListItem>
       <ListItem> Link to Offer </ListItem>
       <ListItem> Link to Service </ListItem>
    </List> 

    const isopenDialog = this.state.opendialog; 

    const islogin = user != null? <Button onClick={localStorage.removeItem('user')}> Logout </Button>: <Button component={Link} to='/login'>Login</Button> 
    const isloginTrue = user != null? '':  <Button component={Link} to='/signin'>Sign in</Button> 
    
  return (
    <div className="root">
    <div className="header">
      <Grid container spacing={8}>
        <Grid item xs={2}>
        
        </Grid>
        <Grid item xs={10}>
        <AppBar position="static" className="appBar">
        <Toolbar>
          <div className="layoutheader">
           <ul className="styleHeader">
              <li> <Button component={Link} to='/profile'>{<AccountCircle />} Account</Button> </li>
              <li>{islogin}</li>
              <li> {isloginTrue} </li>
   
            
            </ul>
            </div>
            <div className="layoutheader">
            <ul className="search">
            <li><input type="text" name="search" placeholder="Search...." className="searchInput"/>
            <button className="material-icons">search</button></li>
            </ul>
            </div>
            <div className="layoutheader">
           <ul className="notification"> 
             <li> <Button disableFocusRipple className="notificationButton" size="small"> <Badge  badgeContent={this.state.notificationUrgent } color="secondary"> {<Notifications/>} </Badge></Button></li>
             <li> <Button size="small"><Badge badgeContent={this.state.notification} color="error"> {<Notifications/>} </Badge></Button></li>
             <li> <Button size="small"><Badge badgeContent={this.state.emailnotification}  color="secondary"> {<Email/>} </Badge></Button></li>
           </ul> 
           </div>
        </Toolbar>
      
      </AppBar>
        </Grid>
        </Grid>
        </div>
        <div className="body">
        <Grid container spacing={8}>
        <Grid item xs={2} >
        <List  className="flexContainer">
          <ListItem  button component={Link} to="/" onClick={this.handleExpandClick}>
              <ListItemIcon>{<Dashboard/> }</ListItemIcon>
              <ListItemText primary="Dashbord" />{buttonExpand}
          </ListItem> 

          {showDashcontent}

        <Divider />
          <ListItem button component={Link}  to="/">
              <ListItemIcon>{<Home/>}</ListItemIcon>
              <ListItemText primary="Home" />
              {<KeyboardArrowRight/>}
          </ListItem>  
          <ListItem button component={Link}  to="/companieslist">
              <ListItemIcon>{<Business/>}</ListItemIcon>
              <ListItemText primary="Companies" />{<KeyboardArrowRight/>}
          </ListItem>  
          <ListItem button component={Link}  to="/candidate">
              <ListItemIcon>{<People/>}</ListItemIcon>
              <ListItemText primary="Candidates" />
              {<KeyboardArrowRight/>}
          </ListItem>  
          <ListItem button component={Link}  to="/offers">
              <ListItemIcon>{<LocalOffer/>}</ListItemIcon>
              <ListItemText primary="Offers" />{<KeyboardArrowRight/>}
          </ListItem>   
          <ListItem button component={Link}  to="/bones">
              <ListItemIcon>{<Payment/>}</ListItemIcon>
              <ListItemText primary="Boneses" />{<KeyboardArrowRight/>}
          </ListItem>  
          <ListItem button component={Link}  to="/invitation">
            <ListItemIcon>{<InsertInvitation/>}</ListItemIcon>
            <ListItemText primary="Invitations" />
            {<KeyboardArrowRight/>}
          </ListItem> 
      </List>
     
        </Grid>
       

        <Grid item  xs={10} className="container">
        <ConfigRoute/>
        </Grid>
        </Grid>
        </div>
        <div className="footer">
        <Grid item  xs={12} className="footer" >
         <Footer/>
        </Grid>
        </div>
    </div>
  );
}
}


export default Layout;
