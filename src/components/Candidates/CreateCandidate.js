
import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import {CandidateModel} from './../../model/candifateModel'
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
import Divider from 'material-ui/Divider'; 
import './style/create.css'


class CreateCandidate extends Component {

  constructor (props){
    super (props)

    this.state ={
      candidate: {
      account: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '', 
        },

      salary:  '',


      headline: '', 
  

      topSkills: [ 
        {
        experience1: '', 
        title1: ''
      }, 
      {
        experience2: '', 
        title2: ''
      },
      {
        experience3: '', 
        title3: ''
      },
      {
        experience4: '', 
        title4: ''
      },
      {
        experience5: '', 
        title5: ''
      }
    ],
    skills: [
      {
        title1: ''
      }, 
      {
        title1: ''
      }, 
    ], 
    benefits: [
        {
          title1: '', 
        }, 
        {
          title2: '', 
        },
        {
          title3: '', 
        },
        {
          title4: '', 
        },
        {
          title5: '', 
        }

    ],
    workExperiences: [

          {
            title1: '', 
            experience2: '', 
          },
          {
            title2: '', 
            experience2: '', 
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




  handleChange = e => {
    const candidateClone = Object.assign({}, this.state.candidate);// Shallow clone.
    const accountClone = Object.assign({}, this.state.candidate.account);// Deep clone.
    const topSkillsClone = Object.assign({}, this.state.candidate.topSkills);// Deep clone.
    // below (let): Persists the last entered value (required).
    let myHeadline = candidateClone.headline;
    let myFirstName = candidateClone.account.firstName;
    let myLastName = candidateClone.account.lastName;
    let myEmail = candidateClone.account.email;
    let myphone = candidateClone.account.phone; 
    let mySalary = candidateClone.salary;
    let myTopSkillsTitle = candidateClone.topSkills[0].title;
    switch (e.target.name) {
        
        case "firstNameInput":
            myFirstName = e.target.value;
            break;
        case "lastNameInput": 
             myLastName = e.target.value; 
             break;
        case "emailInput": 
              myEmail = e.target.value; 
              break;
        case "phoneInput": 
             myphone = e.target.value; 
             break;
        case "headlineInput":
            myHeadline = e.target.value;
            break;
        case "salaryInput":
            mySalary = e.target.value;
            break;
        case "topSkillsTitleInput":
            myTopSkillsTitle = e.target.value;
            break;
        default:
            console.log("Switch statement error");
    }
    accountClone.firstName = myFirstName;// Place the property value inside the deep cloned embedded object.
    accountClone.lastName = myLastName; 
    accountClone.email = myEmail; 
    accountClone.phone = myphone; 
    topSkillsClone[0].title = myTopSkillsTitle;// Place the property value inside the deep cloned embedded array.
    candidateClone["account"] = accountClone;// Place the deep cloned embedded object inside the shallow cloned main object.
    candidateClone["salary"] = mySalary;// Place the property inside the shallow cloned main object.
    candidateClone["headline"] = myHeadline;// Place the property inside the shallow cloned main object.
    candidateClone["topSkills"] = topSkillsClone;// Place the deep cloned embedded array inside the shallow cloned main object.
    this.setState({candidate:candidateClone});
};

  handleSubmit(e) {
   
    e.preventDefault();
    console.log('A name was submitted: ' + this.state.candidate);

    let errors = {}; 
    /*
    if(this.state.account.firstName =='')errors.firstName ="Title can not to be empty"; 
    if(this.state.account.lastName =='')errors.lastName ="userId can not to be empty"; 
    if(this.state.account.email =='')errors.email ="Id can not to be empty"; 
    if(this.state.account.phone =='')errors.phone ="Body can not to be empty"; 
    this.setState({errors})
    return this.props.updateCandidate(this.state.profile);  */
  }
  render() {

    return (
 
      
      
       <div className="container">
       <form className="formCandidate" onSubmit={this.handleSubmit}>
        <div className="userform">
        <Grid container spacing={8}>
          <Grid item xs={12}>
          <Card className="card">
            <CardContent className="cardcontent">
                <div className={classnames('field', {error: this.state.errors.firstName})}>
                      <h4> Personal Information </h4>
                      <label htmlFor="firstName">First Name</label>
                        <input
                        name="firstNameInput"
                        value={this.state.candidate.account.firstName || ''}
                        onChange={this.handleChange}/>
                        <span>{this.state.errors.firstName} </span>
                </div>
                      <div className={classnames('field', {error: !!this.state.errors.lastName})}>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        name="lastNameInput"
                        value={this.state.candidate.account.lastName || ''}
                        onChange={this.handleChange}
                        />
                        <span>{this.state.errors.lastName} </span>
                            </div>
                  <div className={classnames('field', {error: !!this.state.errors.email})}>
                          <label htmlFor="email">Email</label>
                          <input
                            name="emailInput"
                            type="text"
                            value={this.state.candidate.account.email || ''}
                            onChange={this.handleChange}/>
                            <span>{this.state.errors.email} </span>
                  </div>
                  <div className={classnames('field', {error: !!this.state.errors.phone})}>
                        <label htmlFor="phone">Phone</label>
                        <input
                          name="phoneInput"
                          type="number"
                          value={this.state.candidate.account.phone || ''}
                          onChange={this.handleChange}/>
                          <span>{this.state.errors.phone} </span>
                  </div>
                  </CardContent>
           </Card>
           </Grid>
           <Grid item xs={12}>
            <Card className="card">
              <CardContent className="cardcontent">
                  <h4> Expected Salary </h4>
                    <div className={classnames('field', {error: !!this.state.errors.salary})}>
                      <input
                        name="salaryInput"
                        type="number"
                        value={this.state.candidate.salary|| ''}
                        onChange={this.handleChange}/>
                         <span>{this.state.errors.expectedSalary} </span>
                      </div>
          
                    <Divider  light/>
           
                   <h4> Headline</h4>
                    <div className={classnames('field', {error: !!this.state.errors.headline})}>
                       
                          <input
                            name="headlineInput"
                            type="text"
                            value={this.state.candidate.headline || ''}
                            onChange={this.handleChange}/>
                             <span>{this.state.errors.headline} </span>
                    </div>
            
             </CardContent>
             </Card>
             </Grid>
           <Grid  item xs={12}>
           <Card className="card">
             <CardContent className="cardcontent">
                  <h4> Top skills</h4>
                        <div className="field">
                            <input
                              name="experience1"
                              type="text"
                              value={this.state.candidate.topSkills.experience1}
                              onChange={this.handleChange}/>
                              <span> </span>
                        </div>
                        <div className="field">
                          <input
                            name="experience2"
                            type="text"
                            value={this.state.candidate.topSkills.experience2}
                            onChange={this.handleChange}/>
                            <span> </span>
                        </div>
                        <div className="field">
                            <input
                              name="experience3"
                              type="text"
                              value={this.state.candidate.topSkills.experience3}
                              onChange={this.handleChange}/>
                              <span> </span>
                        </div>
                        <div className="field">
                          <input
                            name="experience4"
                            type="text"
                            value={this.state.candidate.topSkills.experience4}
                            onChange={this.handleChange}/>
                            <span> </span>
                        </div>
                        <div className="field">
                          <input
                            name="experience5"
                            type="text"
                            value={this.state.candidate.topSkills.experience5}
                            onChange={this.handleChange}/>
                          <span> </span>
                        </div> 
              </CardContent>
            </Card>
            </Grid>
            <Grid  item xs={12}>
              
            <Card className="card">
              <CardContent className="cardcontent">
                  <h4> Skills</h4>
                        <div className="field">
                          <input
                            name="title1"
                            type="text"
                            value={this.state.candidate.skills.title1}
                            onChange={this.handleChange}/>
                            <span> </span>
                      </div>
                        <div className="field">
                          <input
                            name="title2"
                            type="text"
                            value={this.state.candidate.skills.title2}
                            onChange={this.handleChange}/>
                              <span> </span>
                      </div>
                </CardContent>
              </Card>
              </Grid>
              
            <Grid item xs={12}>
            <Card className="card">
              <CardContent className="cardcontent">
                    <h4>  Project Experiences</h4>
                    <div className="field">
                        <input
                          name="headline"
                          type="text"
                          value={this.state.candidate.projectExperiences.title1}
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
            
                    <div className="">
                        <input
                          name="headline"
                          type="text"
                          value={this.state.candidate.projectExperiences.title2}
                          onChange={this.handleChange}/>
                        <span> </span>
                   </div>
                 </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12}>
        
          <Card className="card">
            <CardContent className="cardcontent">
                  <h4> Educations</h4>
                  <div className="field">
                      <input
                        name="headline"
                        type="text"
                        value={this.state.candidate.educations.title2}
                        onChange={this.handleChange}/>
                      <span> </span>
                  </div>
                  <div className="">
                      <input
                        name="headline"
                        type="text"
                        value={this.state.candidate.educations.title2}
                        onChange={this.handleChange}/>
                      <span> </span>
                  </div>
                  </CardContent>
            </Card>
            </Grid>
           
            <Grid  item xs={12}>
           <Card className="card">
             <CardContent className="cardcontent">
                    <h4> Work Experiance</h4>
                    <div className="field">
                        <input
                          name="title1"
                          type="text"
                          value={this.state.candidate.workExperiences.title1}
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
                    <div className="">
                        <input
                          name="title2"
                          type="text"
                          value={this.state.candidate.workExperiences.title2}
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
                    </CardContent>
            </Card>
            </Grid>
            <Grid  item xs={12}>
           <Card className="card">
             <CardContent className="cardcontent">
                    <h4> Benefits</h4>
                        <div className="field">
                        <input
                          name="title1"
                          type="text"
                          value={this.state.candidate.benefits.title1}
                          onChange={this.handleChange}/>
                            <span> </span>
                        </div>
                    <div className="field">
                        <input
                          name="title2"
                          type="text"
                          value={this.state.candidate.benefits.title2}
                          onChange={this.handleChange}/>
                          <span> </span>
                    </div>
                    <div className="field">
                        <input
                          name="title3"
                          type="text"
                          value={this.state.candidate.benefits.title3}
                          onChange={this.handleChange}/>
                          <span> </span>
                    </div>
                    <div className="field">
                        <input
                          name="title4"
                          type="text"
                          value={this.state.candidate.benefits.title4}
                          onChange={this.handleChange}/>
                          <span> </span>
                    </div>
                    <div className="field">
                        <input
                          name="title5"
                          type="text"
                          value={this.state.candidate.workExperiences.title5}
                          onChange={this.handleChange}/>
                        <span> </span>
                    </div>
                </CardContent>
           </Card>
           </Grid>
            <Grid item xs={12}>
            <Card className="card" raised="true">
              <CardContent className="cardcontent">
                <button label="Submit" primary="true"> Submit</button>
                <Link to="/candidate" className="backtoList"><Button> Back to List Page </Button></Link> 
           </CardContent>
           </Card>
           </Grid>
           </Grid>
           </div>         
          </form>
          </div>
      
    
    )
  }
}

const mapStateToProps = state => {
  return {
    candidate: state.singleProfile.singleCandidate || [], 
   
    }
  }
const mapDispatchToProps = (dispatch) => {
      return {
          feachSingleCandidate: (id) => dispatch(feachSingleCandidate(id)), 
          updateCandidate:(candidate) => dispatch(updateCandidate(candidate))

      }
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(CreateCandidate));