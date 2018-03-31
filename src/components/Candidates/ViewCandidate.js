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
import './style/view.css'


class ViewCandidate extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    if(this.props.match.params){
      const { id } = this.props.match.params;
      this.props.feachSingleCandidate(id); 
    }
   
  }

  render(){
  return (
    <div>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
            Profile
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.id}</ListItem>  
        <ListItem>{this.props.singleProfile.userId}</ListItem>  
        <ListItem>{this.props.singleProfile.title}</ListItem>  
        <ListItem>{this.props.singleProfile.title}</ListItem>   
      </List>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
           View 
          </Button>
          <Button size="small" color="primary">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}
}

const mapStateToProps = (state) => {
  return {
    singleProfile: state.singleProfile.singleCandidate || []
    }
  }
const mapDispatchToProps = (dispatch) => {
      return {
        feachSingleCandidate: (id)=>dispatch(feachSingleCandidate(id))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ViewCandidate);  