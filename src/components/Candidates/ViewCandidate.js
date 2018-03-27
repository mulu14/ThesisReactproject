import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import {feachSingleCandidate} from './../../action/action'
import List, { ListItem } from 'material-ui/List'
import { bindActionCreators } from 'redux'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './view.css'


class ViewCandidate extends Component{
 
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    this.props.feachSingleCandidate(); 
  }

  render(){
    const { classes } = this.props;


  
  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Profile
          </Typography>  
         <List>
        <ListItem>Account</ListItem>  
        <ListItem>Educations</ListItem>  
        <ListItem> Work Experiences</ListItem>  
        <ListItem> Project Experiences </ListItem>   
        <ListItem> Top Skills </ListItem>  
        <ListItem>Benefits</ListItem> 
      </List>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
           View 
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
}



const mapStateToProps = state => {
  return {
    singleProfile: state.singleProfile.singleCandidate || []
    }
  }
const mapDispatchToProps = (dispatch) => {
      return {
        feachSingleCandidate: ()=>dispatch(feachSingleCandidate)
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidate);  