import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import './layout.css'



export default class  Layout extends Component{

    render(){
    return(
    <Grid>
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <IconButton className="menuButton" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className="flex">
            Demando
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    </Grid>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    )
    }
}