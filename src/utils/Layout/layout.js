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
import {Add, Home, Dashboard, Notifications, AccountCircle, LocalOffer, InsertInvitation, 
  People, Business, Payment, KeyboardArrowRight, Search, KeyboardArrowDown} from 'material-ui-icons'
import './layout.css'
class Layout extends Component {

  constructor(props){
    super(props)

  this.state = { isexpanded:
     false };
  }

  handleExpandClick = () => {
    this.setState({ isexpanded: !this.state.isexpanded });
  };



  render(){
    const isexpanded = this.state.isexpanded

    const buttonExpand = isexpanded? <KeyboardArrowRight/>: <KeyboardArrowDown/>
    
  return (
    <div className="root">

    <div className="header">
      <Grid container spacing={8}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
        <AppBar position="static">
        <Toolbar>
           <ul className="styleHeader">
              <Button component={Link} to='/profile'>{<AccountCircle />} Account</Button>  
              <Button component={Link} to='/login'>Login</Button>  
            </ul>
            <ul className="search">
            <li><input type="text"/>{<Search/>}</li>
            </ul>
           <ul className="notification"> 
             <li> {<Notifications/>}</li>
           </ul> 
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
