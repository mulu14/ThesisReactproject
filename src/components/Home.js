import React, { Component } from 'react';
import Layout from './../utils/Layout/layout'
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
          <Layout/> 
    </div>
      
    );
  }
}

export default Home;

