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
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
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
    if (this.props.singleProfile.length === 0) return null;
    console.log(this.props.singleProfile)
  return (
      <Grid container space={8}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
          <ListItem> Head Line:{this.props.singleProfile.headline}</ListItem> 
          </CardContent>
          </Card>
          <Divider/>
          <Card>
            <CardContent>
          <ListItem>Expected Salary:{this.props.singleProfile.salary}</ListItem> 
          </CardContent>
          </Card>
        <Divider/>
        <Card className="card">
        <CardContent>
        <Typography gutterBottom variant="headline" component="h1">
            Basic Information
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.account.firstname}</ListItem>  
        <ListItem>{this.props.singleProfile.account.lastname}</ListItem>  
        <ListItem>{this.props.singleProfile.account.email}</ListItem>  
        <ListItem>{this.props.singleProfile.account.phone}</ListItem> 
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          Top skills
          </Typography>  
         <List>
        <ListItem>Experience: {this.props.singleProfile.topSkills[0].experience}</ListItem>  
        <ListItem> Title: {this.props.singleProfile.topSkills[0].title}</ListItem>  
      </List>
        </CardContent>
        </Card>
        <Divider/>
        <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
           Benefits
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.benefits[0].title}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          Skills
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.skills[0].title}</ListItem>
  
      </List>
        </CardContent>
        </Card>
        <Divider/>
        <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          Work Experience
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.workExperiences[0].experience}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          Work Experience
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.workExperiences[0].experience}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
           Project Experience
          </Typography>  
         <List>
        <ListItem>{this.props.singleProfile.projectExperiences[0].title}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
     
      </Grid>
      
      <Grid item xs={12}>
        <Card>

        <CardActions>
          <Button size="small" color="primary">Edit</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid  item xs={12}>
        <Card className="placeholder"> </Card>
      </Grid>
      </Grid>

    
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