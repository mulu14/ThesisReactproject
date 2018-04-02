
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {Test} from './../../model/test'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { withRouter, Route } from 'react-router-dom';
import {createNewCandidate,feachSingleCandidate,  updateCandidate} from './../../action/action'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import './style/create.css'
import Typography from 'material-ui/Typography';
import { Field, reduxForm, initialize } from 'redux-form';  
import './style/create.css'


class CreateCandidate extends Component {

  constructor (props){
    super (props)

    this.state={
      userId: '',
      id: '', 
      title: '', 
      body: ''
      }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  componentWillMount(){
    if(this.props.match.params){
      const { id } = this.props.match.params;
      this.props.feachSingleCandidate(id); 
    }
   
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.candidate.id != nextProps.candidate.id) {
      this.setState(
        {userId: nextProps.candidate.userId, 
        id: nextProps.candidate.id, 
        title: nextProps.candidate.title,
        body: nextProps.candidate.body});
    }
  }

  updateCatState(event) {
    const field = event.target.name;
    const candidate = this.state.candidate;
    candidate[field] = event.target.value;
    return this.setState({candidate: candidate});
  }

  handleChange(event) {
    this.setState(
      {userId: event.target.userId, 
      id:event.target.id, 
     title:event.target.title,
     body:event.target.body
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state);
    event.preventDefault();
  }



  render() {
    //console.log(this.state);
    return (
      <Grid>
      <Grid item xs={8}> 
        <Card>
        <form>
        <CardContent>
        <Typography  variant="headline" component="h1">
            Edit Candidate
        </Typography>
       
        <input
          label="userId"
          floatinglabeltext="User Id"
          value={this.state.userId || ''}
          onChange={this.handleChange}/>
         <br/>
         <TextField
          label="Id"
          floatinglabeltext="Id"
          value={this.state.id || ''}
          onChange={this.handleChange}
          />

         <br/>
         <TextField
          label="Title"
          type="text"
          floatinglabeltext="Title"
          value={this.state.title || ''}
          onChange={this.handleChange}/>
        
         <br/>
           <TextField
            label="Body"
             type="text"
             floatinglabeltext="Body"
             value={this.state.body || ''}
             onChange={this.handleChange}/>
            
           <br/>
           </CardContent>
           <CardActions>
           <Button label="Submit" primary="true" className="style"> Submit</Button>
           <Link to="/candidate" className="backtoList"><Button> Back to List Page </Button></Link>
                     
          </CardActions>
          </form>
       </Card>
       </Grid>
       
    </Grid>
   
    )
  }
}

const mapStateToProps = state => {
  return {
    candidate: state.singleProfile.singleCandidate || []
   
    }
  }
const mapDispatchToProps = (dispatch) => {
      return {
          feachSingleCandidate: (id) => dispatch(feachSingleCandidate(id)), 
          updateCandidate:(candidate) => dispatch(updateCandidate(candidate))

      }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(CreateCandidate));