import React, { Component } from 'react';
import Footer from './../footer/Footer'
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
     <Grid container spacing={8}> 
          <SideDrawer/> 
          <Footer/>
   </Grid>
 </div>
      
    );
  }
}

export default Home;

