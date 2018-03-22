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



class Home extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
     const { classes} = this.props;
     return (
     <div>
     <Grid container spacing={8}> 
          <Header/>
          <Sidebar/>
          <ConfigRoute/>
          {this.props.children}
        <Footer/>
   </Grid>
 </div>
      
    );
  }
}

export default Home;

