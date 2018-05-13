import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { withRouter, Route } from 'react-router-dom';
import {
  createNewCandidate,
  feachSingleCandidate,
  updateCandidate
} from './../../action/candidateaction';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from 'material-ui/Button';
import './style/create.css';
import Typography from 'material-ui/Typography';
import { Field, reduxForm, initialize } from 'redux-form';
import Divider from 'material-ui/Divider';
import './style/create.css';

class EditCandidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //copyCandidate: {},
      copyCandidate: {
        account: {
          firstname: '',
          lastname: '',
          email: '',
          phone: ''
        },

        salary: '',

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
          }
        ],
        benefits: [
          {
            title: ''
          },
          {
            title: ''
          },
          {
            title: ''
          },
          {
            title: ''
          },
          {
            title: ''
          }
        ],
        workExperiences: [
          {
            title: '',
            experience: ''
          },
          {
            title: '',
            experience: ''
          }
        ],

        projectExperiences: [
          {
            title: ''
          },
          {
            title: ''
          },
          {
            title: ''
          }
        ],
        educations: [
          {
            fieldOfStudy: ''
          },
          {
            fieldOfStudy: ''
          },
          {
            fieldOfStudy: ''
          }
        ]
      },
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params) {
      const { id } = this.props.match.params;
      this.props.feachSingleCandidate(id);
      this.setState({ copyCandidate: this.props.candidate });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.candidate._id != nextProps.candidate._id) {
      this.setState({ copyCandidate: nextProps.candidate });
    }
  }

  handleChange = e => {
    const candidateClone = Object.assign({}, this.state.copyCandidate);
    const accountClone = Object.assign({}, this.state.copyCandidate.account);
    const topSkillsClone = Object.assign(
      {},
      this.state.copyCandidate.topSkills
    );
    const salaryClone = Object.assign({}, this.state.copyCandidate.salary);
    let firstName = candidateClone.account.firstname;
    let lastName = candidateClone.account.lastname;
    let phone = candidateClone.account.phone;
    let email = candidateClone.account.email;
    let salary = candidateClone.salary;
    let headline = candidateClone.headline;
    let experinecOne = candidateClone.topSkills[0].experience;
    let titleOne = candidateClone.topSkills[0].title;

    switch (e.target.name) {
      case 'firstNameInput':
        firstName = e.target.value;
        break;
      case 'lastNameInput':
        lastName = e.target.lastname;
        break;
        lastName = e.target.value;
      case 'emailInput':
        email = e.target.value;
        break;
      case 'phoneInput':
        phone: e.target.value;
        break;
      case 'salaryInput':
        salary: e.target.value;
        break;
      case 'headlineInput':
        headline: e.target.value;
        break;
      case 'experience1':
        experinecOne: e.target.value;
        break;
      case 'titleone':
        titleOne: e.target.value;
        break;
      default:
        console.log('Error');
    }

    accountClone.firstname = firstName;
    accountClone.lastname = lastName;
    accountClone.email = email;
    accountClone.phone = phone;
    topSkillsClone[0].experience = experinecOne;
    topSkillsClone[0].title = titleOne;
    candidateClone['account'] = accountClone;
    candidateClone['salary'] = salary;
    candidateClone['headline'] = headline;
    candidateClone['topSkills'] = topSkillsClone;
    this.setState({ copyCandidate: candidateClone });
  };

  handleSubmit(e) {
    e.preventDefault();

    let errors = {};
    /*
    if(this.state.account.firstName =='')errors.firstName ="Title can not to be empty"; 
    if(this.state.account.lastName =='')errors.lastName ="userId can not to be empty"; 
    if(this.state.account.email =='')errors.email ="Id can not to be empty"; 
    if(this.state.account.phone =='')errors.phone ="Body can not to be empty"; 
    this.setState({errors})
    return this.props.updateprofile(this.state.profile);  */
  }
  render() {
    if (this.props.candidate.length === 0) return null;
    //console.log(this.state.copyCandidate);
    console.log(this.state.copyCandidate.topSkills);
    return (
      <div className="container">
        <form className="formprofile" onSubmit={this.handleSubmit}>
          <div className="userform">
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent">
                    <div
                      className={classnames('field', {
                        error: this.state.errors.firstName
                      })}
                    >
                      <h4> Personal Information </h4>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        name="firstNameInput"
                        value={this.state.copyCandidate.account.firstname || ''}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.firstName} </span>
                    </div>
                    <div
                      className={classnames('field', {
                        error: !!this.state.errors.lastName
                      })}
                    >
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        name="lastNameInput"
                        value={this.state.copyCandidate.account.lastname || ''}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.lastName} </span>
                    </div>
                    <div
                      className={classnames('field', {
                        error: !!this.state.errors.email
                      })}
                    >
                      <label htmlFor="email">Email</label>
                      <input
                        name="emailInput"
                        type="text"
                        value={this.state.copyCandidate.account.email || ''}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.email} </span>
                    </div>
                    <div
                      className={classnames('field', {
                        error: !!this.state.errors.phone
                      })}
                    >
                      <label htmlFor="phone">Phone</label>
                      <input
                        name="phoneInput"
                        type="number"
                        value={this.state.copyCandidate.account.phone || ''}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.phone} </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent">
                    <h4> Expected Salary </h4>
                    <div
                      className={classnames('field', {
                        error: !!this.state.errors.salary
                      })}
                    >
                      <input
                        name="salaryInput"
                        type="number"
                        value={this.state.copyCandidate.salary || ''}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.expectedSalary} </span>
                    </div>

                    <Divider light />

                    <h4> Headline</h4>
                    <div
                      className={classnames('field', {
                        error: !!this.state.errors.headline
                      })}
                    >
                      <input
                        name="headlineInput"
                        type="text"
                        value={this.state.copyCandidate.headline || ''}
                        onChange={this.handleChange}
                      />
                      <span>{this.state.errors.headline} </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent1">
                    <h4> Top skills</h4>
                    <div className="field">
                      <div>
                        <label>Job title: </label>

                        <input
                          name="topskillonetitle"
                          type="text"
                          value={
                            this.state.copyCandidate.topSkills[0].title || ''
                          }
                          onChange={this.handleChange}
                        />
                        <label>Year of Experiance: </label>
                        <input
                          name="topskilloneexperience"
                          type="text"
                          value={
                            this.state.copyCandidate.topSkills[0].experience ||
                            ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <label>Job title: </label>
                        <input
                          name="topskilltwotitle"
                          type="text"
                          value={
                            this.state.copyCandidate.topSkills[1].title || ''
                          }
                          onChange={this.handleChange}
                        />
                        <label>Year of Experiance: </label>
                        <input
                          name="topskilltwoexperience"
                          type="text"
                          value={
                            this.state.copyCandidate.topSkills[1].experience ||
                            ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <label>Job title: </label>
                        <input
                          name="topskillthreetitle"
                          type="text"
                          value={
                            this.state.copyCandidate.topSkills[2].title || ''
                          }
                          onChange={this.handleChange}
                        />
                        <label>Year of Experiance: </label>
                        <input
                          name="topskillthreeexperience"
                          type="text"
                          value={
                            this.state.copyCandidate.topSkills[2].experience ||
                            ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent1">
                    <h4> Skills</h4>
                    <div className="field">
                      <div>
                        <label>Year of Experiance: </label>
                        <input
                          name="skillone"
                          type="text"
                          value={this.state.copyCandidate.skills[0].title || ''}
                          onChange={this.handleChange}
                        />
                      </div>

                      <span> </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent1">
                    <h4> Project Experiences</h4>
                    <div className="field">
                      <div>
                        <label>Name of the Project: </label>
                        <input
                          name="projectone"
                          type="text"
                          value={
                            this.state.copyCandidate.projectExperiences[0]
                              .title || ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>

                      <span> </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent1">
                    <h4> Educations</h4>
                    <div className="field">
                      <div>
                        <label>Field of Study: </label>
                        <input
                          name="studyfield"
                          type="text"
                          value={
                            this.state.copyCandidate.educations[0]
                              .fieldofstudy || ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>

                      <span> </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent2">
                    <h4> Work Experiance</h4>
                    <div className="field">
                      <div>
                        <label>Job title: </label>
                        <input
                          name="workexp1title"
                          type="number"
                          value={
                            this.state.copyCandidate.workExperiences[0].title ||
                            ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>
                      <div>
                        <label>Year of experiance: </label>
                        <input
                          name="workexp1"
                          type="number"
                          value={
                            this.state.copyCandidate.workExperiences[0]
                              .experience || ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>

                      <span> </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent1">
                    <h4> Benefits</h4>
                    <div className="field">
                      <div>
                        <label>Benefit One: </label>
                        <input
                          name="benefitone"
                          type="text"
                          value={
                            this.state.copyCandidate.benefits[0].title || ''
                          }
                          onChange={this.handleChange}
                        />
                      </div>

                      <span> </span>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card className="card">
                  <CardContent className="cardcontent">
                    <button label="Submit" primary="true">
                      {' '}
                      Submit
                    </button>
                    <Link to="/profile" className="backtoList">
                      <Button> Back to List Page </Button>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    candidate: state.singleProfile.singleCandidate || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    feachSingleCandidate: id => dispatch(feachSingleCandidate(id)),
    updateCandidate: candidate => dispatch(updateCandidate(candidate))
  };
};

export default connect(mapStateToProps, mapDispatchToProps, null, {
  pure: false
})(EditCandidate);
//export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(CreateCandidate));
