import React, { Component } from 'react';
import Footer from './../footer/Footer'
import Sidebar from './../utils/Sidebar/Sidebar'
import Appbar from './../utils/Appbar/Appbar'
import  ConfigRoute from './../utils/Routing/Routing'
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';


const drawerWidth = 240;

const styles = theme => ({
  base: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Home extends Component {
  render() {
     const { classes} = this.props;
     return (
     <div className={classes.base}>
     <Grid container spacing={8}> 

           {/*
            Logo and navigation bar
            */}

     <Grid item xs={2}>
     <div className="logo">Logo</div>
     </Grid>  
      <Grid item xs={10}>
      <Appbar/>
      </Grid>  

        {/*
             sidebar 
            */}
      <Grid item xs={3}>
      <Drawer
       variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }} >
      <Divider/>
        <Sidebar/>
      </Drawer> 
      </Grid>
          {/*
            creating main content area
            */}
       <Grid item xs={9}>
       <main className={classes.content}>
       <ConfigRoute/>
       </main>
       </Grid>
        
        {/*
           footer, imported from footer folder, 
            */}
        
        <Footer/>

  </Grid>
 </div>
      
    );
  }
}



Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

