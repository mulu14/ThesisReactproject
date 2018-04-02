import React from 'react';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import RestoreIcon from 'material-ui-icons/Restore';
import FavoriteIcon from 'material-ui-icons/Favorite';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import Grid from 'material-ui/Grid';




const Footer =(props) =>{
  return(
    <Grid  item xs={12}> 
    <BottomNavigation style={{
      backgroundColor: "#2C395A", 
      marginBottom: 0,
    }}>
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    
    </Grid>
  )
}


export default Footer;
