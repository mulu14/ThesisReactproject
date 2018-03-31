import React, { Component } from 'react';
import Footer from './../footer/Footer'
import Layout from './../utils/layout/layout'
import DrawerLayout from './../utils/layout/drawer'
import  SideDrawer from './../utils/Sidebar/Sidebar'
import Grid from 'material-ui/Grid';



class Home extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
     const { classes} = this.props;
     return (
     <div>
     <Grid> 
          <SideDrawer/> 
          <Footer/>
   </Grid>
 </div>
      
    );
  }
}

export default Home;

