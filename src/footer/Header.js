import React from 'react';
import Appbar from './../utils/Appbar/Appbar'
import Grid from 'material-ui/Grid';




const Header =(props) =>{
  return(
     <Grid container spacing={8}> 
        <Grid item xs={2}>
        </Grid>  
        <Grid item xs={10}>
        <Appbar/>
        </Grid>  
    </Grid>
  )
}


export default Header;
