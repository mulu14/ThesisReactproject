
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {Test} from './../../model/test'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import classnames from 'classnames'; 
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

    this.state ={
      profile: {
        id: '', 
        title: '', 
        body: '',
        userId: ''
      },
      
      errors: {

      }
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
      this.setState({profile: nextProps.candidate}
      );
    }
  }



 handleChange(e) {
  let inputName = e.target.name;
  let inputValue = e.target.value;
  let copyState = Object.assign({}, this.state);
  copyState.profile[inputName] = inputValue;
  this.setState(copyState);
}


  handleSubmit(e) {
    //console.log('A name was submitted: ' + this.state.profile.title);
    e.preventDefault();

    let errors = {}; 
    if(this.state.profile.title =='')errors.title ="Title can not to be empty"; 
    if(this.state.profile.userId =='')errors.title ="userId can not to be empty"; 
    if(this.state.profile.id =='')errors.title ="Id can not to be empty"; 
    if(this.state.profile.body =='')errors.title ="Body can not to be empty"; 
    this.setState({errors})
    return this.props.updateCandidate(this.state.profile);  
  }

  render() {
    return (
      <div>
      <Grid container spacing={8}>
      <Grid item xs={8}> 
      <div className="container">
      <form className="form" onSubmit={this.handleSubmit}>
       <div className={classnames('field', {error: this.state.errors.userId})}>
        <label htmlFor="userId">UserId</label>
        <input
          name="userId"
          value={this.state.profile.userId || ''}
          onChange={this.handleChange}/>
           <span>{this.state.errors.userId} </span>
         </div>
         <div className={classnames('field', {error: !!this.state.errors.id})}>
         <label htmlFor="id">Id</label>
         <input
          name="id"
          value={this.state.profile.id || ''}
          onChange={this.handleChange}
          />
          <span>{this.state.errors.id} </span>
         </div>
         <div className={classnames('field', {error: !!this.state.errors.title})}>
         <label htmlFor="title">Title</label>
         <input
          name="title"
          type="text"
          value={this.state.profile.title || ''}
          onChange={this.handleChange}/>
           <span>{this.state.errors.title} </span>
         </div>
         <div className={classnames('field', {error: !!this.state.errors.body})}>
         <label htmlFor="body">Body</label>
           <input
             name="body"
             type="text"
             value={this.state.profile.body || ''}
             onChange={this.handleChange}/>
              <span>{this.state.errors.body} </span>
           </div>
           <button label="Submit" primary="true"> Submit</button>
           <Link to="/candidate" className="backtoList"><Button> Back to List Page </Button></Link>          
          </form>
          </div>
       </Grid>
       
    </Grid>
    </div>
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