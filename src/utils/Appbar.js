
import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { ListItem} from 'material-ui/List';
import { Link} from 'react-router-dom';
import classNames from 'classnames';


const styles = {
  list: {
    width: 20,
    color: "#5486ff",
  },
  fullList: {
    width: 'auto',
  },
};


const Appbar =(props) =>{
  const { classes} = props;
    return(
        <AppBar position="static" color="primary">
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