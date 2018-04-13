
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
      account: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '', 
        },
      expectedSalary: '', 
      headline: '',
      topSkills: [ 
        {
        experience: '', 
        title: ''
      }, 
      {
        experience: '', 
        title: ''
      },
      {
        experience: '', 
        title: ''
      },
      {
        experience: '', 
        title: ''
      },
      {
        experience: '', 
        title: ''
      }
    ],
    skills: [
      {
        title: ''
      }, 
      {
        title: ''
      }, 
    ], 
    benefits: [
        {
          title: '', 
        }, 
        {
          title: '', 
        },
        {
          title: '', 
        },
        {
          title: '', 
        },
        {
          title: '', 
        }

    ],
    workExperiences: [

          {
            title: '', 
            experience: '', 
          },
          {
            title: '', 
            experience: '', 
          },
        
    ],

    projectExperiences: [
      {

      },
      {

      }
    ],
    educations: [
      {
        fieldOfStudy:  ''
      }
    ], 
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
  copyState.account[inputName] = inputValue;
  this.setState(copyState);
}


  handleSubmit(e) {
    //console.log('A name was submitted: ' + this.state.profile.title);
    e.preventDefault();

    let errors = {}; 
    if(this.state.account.firstName =='')errors.firstName ="Title can not to be empty"; 
    if(this.state.account.lastName =='')errors.lastName ="userId can not to be empty"; 
    if(this.state.account.email =='')errors.email ="Id can not to be empty"; 
    if(this.state.account.phone =='')errors.phone ="Body can not to be empty"; 
    this.setState({errors})
    return this.props.updateCandidate(this.state.profile);  
  }
  render() {
    return (
      <div>
      
      
       <div className="container">
       <form className="formCandidate" onSubmit={this.handleSubmit}>
        <div className="userform">
        <Grid container spacing={8}>
          <Grid item xs={6}>
          <div className="basicinformation">
                <div className={classnames('field', {error: this.state.errors.firstName})}>
                      <h4> Personal Information </h4>
                      <label htmlFor="firstName">First Name</label>
                        <input
                        name="firstName"
                        value={this.state.account.firstName || ''}
                        onChange={this.handleChange}/>
                        <span>{this.state.errors.firstName} </span>
                </div>
                      <div className={classnames('field', {error: !!this.state.errors.lastName})}>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        name="lastName"
                        value={this.state.account.lastName || ''}
                        onChange={this.handleChange}
                        />
                        <span>{this.state.errors.lastName} </span>
                            </div>
                  <div className={classnames('field', {error: !!this.state.errors.email})}>
                          <label htmlFor="email">Email</label>
                          <input
                            name="email"
                            type="text"
                            value={this.state.account.email || ''}
                            onChange={this.handleChange}/>
                            <span>{this.state.errors.email} </span>
                  </div>
                  <div className={classnames('field', {error: !!this.state.errors.phone})}>
                        <label htmlFor="phone">Phone</label>
                        <input
                          name="phone"
                          type="number"
                          value={this.state.account.phone || ''}
                          onChange={this.handleChange}/>
                          <span>{this.state.errors.phone} </span>
                  </div>
           </div>
           </Grid>
           <Grid item xs={3}>
                    <br/>
           <div>
                  <h4> Expected Salary </h4>
                    <div className={classnames('field', {error: !!this.state.errors.expectedSalary})}>
                      <input
                        name="expectedSalary"
                        type="number"
                        value={this.state.expectedSalary || ''}
                        onChange={this.handleChange}/>
                          <span>{this.state.errors.expectedSalary} </span>
                      </div>
            </div>
                     <br/>
            <div>
                   <h4> Headline</h4>
                    <div className={classnames('field', {error: !!this.state.errors.expectedSalary})}>
                       
                          <input
                            name="headline"
                            type="text"
                            value={this.state.headline || ''}
                            onChange={this.handleChange}/>
                              <span>{this.state.errors.headline} </span>
                    </div>
             </div>
             </Grid>
                     <br/>
           <Grid  item xs={6}>
          <div>
                  <h4> Top skills</h4>
                        <div className="">
                            <input
                              name="headline"
                              type="text"
                              value=""
                              onChange={this.handleChange}/>
                              <span> </span>
                        </div>
                        <div className="">
                          <input
                            name="headline"
                            type="text"
                            value=""
                            onChange={this.handleChange}/>
                            <span> </span>
                        </div>
                        <div className="">
                            <input
                              name="headline"
                              type="text"
                              value=""
                              onChange={this.handleChange}/>
                              <span> </span>
                        </div>
                        <div className="">
                          <input
                            name="headline"
                            type="text"
                            value=""
                            onChange={this.handleChange}/>
                            <span> </span>
                        </div>
                        <div className="">
                          <input
                            name="headline"
                            type="text"
                            value=""
                            onChange={this.handleChange}/>
                          <span> </span>
                        </div> 
            </div>
            </Grid>
            <Grid xs={6}>
                    <br/>
            <div>
                  <h4> Skills</h4>
                        <div className="">
                          <input
                            name="headline"
                            type="text"
                            value=""
                            onChange={this.handleChange}/>
                            <span> </span>
                      </div>
                        <div className="">
                          <input
                            name="headline"
                            type="text"
                            value=""
                            onChange={this.handleChange}/>
                              <span> </span>
                      </div>
              </div>
              </Grid>
                      <br/>
         
                    <br/>
            <Grid item xs={4}>
            <div>
                    <h4>  Project Experiences</h4>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
            
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                        <span> </span>
                   </div>
          </div>
          </Grid>
                   <br/>
          <Grid item xs={4}>
          <div>
                  <h4> Educations</h4>
                  <div className="">
                      <input
                        name="headline"
                        type="text"
                        value=""
                        onChange={this.handleChange}/>
                      <span> </span>
                  </div>
                  <div className="">
                      <input
                        name="headline"
                        type="text"
                        value=""
                        onChange={this.handleChange}/>
                      <span> </span>
                  </div>
            </div>
            </Grid>
            <br/>
           
            <Grid  item xs={4}>
           <div>
                    <h4> Work Experiance</h4>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
            </div>
            </Grid>
            <Grid  item xs={6}>
           <div>
                    <h4> Benefits</h4>
                        <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                            <span> </span>
                        </div>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                          <span> </span>
                    </div>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                          <span> </span>
                    </div>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                          <span> </span>
                    </div>
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value=""
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
           </div>
           </Grid>
            <Grid item xs={12}>

           <button label="Submit" primary="true"> Submit</button>
           <Link to="/candidate" className="backtoList"><Button> Back to List Page </Button></Link> 
           </Grid>
           </Grid>
           </div>         
          </form>
          </div>
      
       
   
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