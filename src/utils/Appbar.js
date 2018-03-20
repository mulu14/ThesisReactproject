
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import List, { ListItem} from 'material-ui/List';
import { Link} from 'react-router-dom';


const Appbar =() =>{
    return(
        <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Demendo
          </Typography>
          <ListItem button component={Link} to='/profile'>Profile</ListItem>  
          <ListItem button component={Link} to='/logout'>Logout</ListItem>  
        </Toolbar>
      </AppBar>


    )
}

export default Appbar; 