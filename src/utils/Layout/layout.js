import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link} from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Footer from './../../footer/Footer'
import ConfigRoute from './../Routing/Routing'
import Divider from 'material-ui/Divider';
import {Add, Home, Dashboard, Notifications, AccountBox, LocalOffer, InsertInvitation, People, Business, Payment, KeyboardArrowRight} from 'material-ui-icons'
import './layout.css'



const styleHeader = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  color:"#2c3345", 
};



class Layout extends Component {

  constructor(props){
    super(props)

  this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render(){
  return (
    <div className="root">
      <Grid container spacing={8}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
        <AppBar position="static">
        <Toolbar>
          <List style={styleHeader}>
              <ListItem button component={Link} to='/profile'>
              <ListItemIcon>{<AccountBox/>}</ListItemIcon>
              <ListItemText primary="Account" />
              </ListItem>  
              <ListItem button component={Link} to='/login'>Login</ListItem>  
            </List>
           <List className="notification"> 
             <ListItem> {<Notifications/>}</ListItem>
           </List>
        </Toolbar>
      
      </AppBar>
        </Grid>
        <Grid item xs={2} children>
        <List  className="flexContainer">
          <ListItem  button component={Link} to="/" onClick={this.handleExpandClick}>
              <ListItemIcon>{<Dashboard/> }</ListItemIcon>
              <ListItemText primary="Dashbord" />
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

        <Grid item  xs={10} className="container" children>
        <ConfigRoute/>
        </Grid>
        <Grid item  xs={12} className="footer" children>
         <Footer/>
        </Grid>
      </Grid>
    </div>
  );
}
}


export default Layout;
