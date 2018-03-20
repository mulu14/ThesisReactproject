
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem} from 'material-ui/List';
import { Link} from 'react-router-dom';
import classNames from 'classnames';
import './Appbar.css'; 

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  padding: 0,
  color:"#2c3345"
};


const Appbar =(props) =>{
  const { classes} = props;
    return(
      <div>
        <AppBar position="static" color="primary">
        <Toolbar>
          <List style={flexContainer}>
              <ListItem button component={Link} to='/profile'>Profile</ListItem>  
              <ListItem button component={Link} to='/logout'>Logout</ListItem>  
          </List>
        </Toolbar>
      </AppBar>
   </div>

    )
}

export default Appbar; 