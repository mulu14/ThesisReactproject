import React from 'react';
import BottomNavigation, {
  BottomNavigationAction
} from 'material-ui/BottomNavigation';
import Grid from 'material-ui/Grid';

const Footer = props => {
  return (
    <Grid item xs={12}>
      <BottomNavigation
        style={{
          backgroundColor: '#2C395A',
          marginBottom: 0,
          height: 180
        }}
      />
    </Grid>
  );
};

export default Footer;
