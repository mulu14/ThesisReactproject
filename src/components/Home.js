import React, { Component } from 'react';
import Footer from './../footer/Footer'
import Header from './../footer/Header'
import Sidebar from './../utils/Sidebar/Sidebar'
import Appbar from './../utils/Appbar/Appbar'
import  ConfigRoute from './../utils/Routing/Routing'
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';




const styles = theme => ({
  base: {
    flexGrow: 1,
  },
  
});

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
     const { classes} = this.props;
     return (
     <div className={classes.base}>
      <Header/>
      <Sidebar/>
      <ConfigRoute/>
      <Footer/>
 </div>
      
    );
  }
}



Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

