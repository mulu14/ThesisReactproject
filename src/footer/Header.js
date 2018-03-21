import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';
import Appbar from './../utils/Appbar/Appbar'
import Grid from 'material-ui/Grid';




const Header =(props) =>{
  return(
     <Grid container spacing={8}> 
        <Grid item xs={2}>
        <div className="logo">Logo</div>
        </Grid>  
        <Grid item xs={10}>
        <Appbar/>
        </Grid>  
    </Grid>
  )
}


export default Header;
