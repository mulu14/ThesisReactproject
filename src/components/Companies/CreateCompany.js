import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { FileUpload } from 'material-ui-icons';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

import './style/create.css';
import image1 from './../../images/image1.jpg';
import image2 from './../../images/image2.jpg';
import image3 from './../../images/image3.jpg';
import image4 from './../../images/image4.jpg';

class CreateCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {
        firstname: '',
        lastname: '',
        email: '',
        phone: ''
      }
    };
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <Grid container spacing={8} />
        </div>
        <div className="content">
          <Grid container spacing={8}>
            <div>
              <form>
                <div className="form">
                  <div>
                    <div>
                      <label>Company name</label>
                      <input type="email" name="companyname" />
                    </div>
                    <label> First name</label>
                    <input type="text" name="firstname" />
                  </div>
                  <div>
                    <label>Last name</label>
                    <input type="text" name="lastname" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" name="email" />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input type="number" name="phonennumber" />
                  </div>
                  <div />
                </div>

                <div className="benifits">
                  <p> What kinds of benefits do you offers?</p>
                  <div>
                    <ul className="colm-1">
                      <li>
                        <input type="checkbox" name="balance" value="balance" />
                        <label> Balance</label>{' '}
                      </li>
                      <li>
                        <input type="checkbox" name="car" value="car" />
                        <label>Car</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="bonsemodel"
                          value="bonsemodel"
                        />
                        <label>Bonse Model</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="centraloffice"
                          value="centraloffice"
                        />
                        <label>Central Office</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="ownership"
                          value="ownership"
                        />{' '}
                        <label>Ownership</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="ownresponsiblity"
                          value="ownresponsiblity"
                        />
                        <label>Own responsiblity</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="monthlysalary"
                          value="monthleysalary"
                        />
                        <label>Monthely salary</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="flexiableworkingtime"
                          value="flexiableworkingtime"
                        />
                        <label>Flexiable working </label>{' '}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="colm-2">
                      <li>
                        <input type="checkbox" name="freedom" value="freedom" />
                        <label> Freedom</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="medicalallowance"
                          value="medicalallowance"
                        />
                        <label>Medical allowance</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="careergrowth"
                          value="careergrowth"
                        />
                        <label>Career growth</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="codedays"
                          value="codedays"
                        />
                        <label>Code days</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="competitivesalary"
                          value="competitivesalary"
                        />{' '}
                        <label>Competitive salary</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="morethan25daysholidays"
                          value="morethan25daysholidays"
                        />
                        <label> more than 25 days holidays</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="workfromhome"
                          value="workfromhome"
                        />
                        <label>Possiblity work from home</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="workindistance"
                          value="workindistance"
                        />
                        <label>Possiblity to work in distance</label>{' '}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="colm-3">
                      <li>
                        <input
                          type="checkbox"
                          name="newtechnique"
                          value="newtechnique"
                        />
                        <label>New technique</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="Healthinsurance"
                          value="Healthinsurance"
                        />
                        <label>Health Insurance</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="stableworlingsituation"
                          value="stableworlingsituation"
                        />
                        <label>Stable worling situation</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="toothInsurance"
                          value="toothInsurance"
                        />
                        <label>Tooth Insurance</label>
                      </li>
                      <li>
                        <input type="checkbox" name="pension" value="pension" />{' '}
                        <label> Pension</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="supportsystem"
                          value=">supportsystem"
                        />
                        <label>Support system</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="developementpossiblity"
                          value="developementpossiblity"
                        />
                        <label>Developement Possiblity</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name="flexiableworkingtime"
                          value="flexiableworkingtime"
                        />
                        <label>Place holder</label>{' '}
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div>
                    <p>
                      {' '}
                      Indicate other benefits that may arise intrest from
                      Candidates{' '}
                    </p>
                    <textarea rows="10" cols="152" />
                  </div>
                  <div className="officeLayout">
                    <div>
                      <Card>
                        <img src={image1} alt="Working enviroment" />
                        <li>
                          {' '}
                          <FileUpload />
                        </li>
                      </Card>
                    </div>
                    <div className="marginfromLeft">
                      <Card>
                        <img src={image2} alt="Working enviroment" />
                        <li>
                          {' '}
                          <FileUpload />
                        </li>
                      </Card>
                    </div>
                    <div className="marginfromLeft">
                      <Card>
                        <img src={image3} alt="Working enviroment" />
                        <li>
                          {' '}
                          <FileUpload />
                        </li>
                      </Card>
                    </div>
                    <div className="marginfromLeft">
                      <Card>
                        <img src={image4} alt="Working enviroment" />
                        <li>
                          <FileUpload />{' '}
                        </li>
                      </Card>
                    </div>
                  </div>
                  <br />
                  <div>
                    <Card>
                      <CardContent>
                        <ul className="organizationInfo">
                          <div className="infoline">
                            <label> Organization nummber </label>
                            <input type="text" />
                          </div>
                          <div className="infoline">
                            <label> Number of Employee</label>
                            <input type="number" />
                          </div>
                          <div>
                            <label> Company Official web </label>
                            <input type="url" />
                          </div>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  <br />
                  <div>
                    <Card>
                      <CardContent>
                        <label> Company Logo</label>
                        <input type="text" />
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <p> Company Description</p>
                    <textarea rows="10" cols="152" />
                  </div>
                  <br />
                  <div>
                    <p> What is included in teck Stack</p>
                    <Chip label={'Angular 2'} />
                    <Chip label={'Java'} />
                    <Chip label={'C'} />
                    <Chip label={'React'} />
                    <Chip label={'PHP'} />
                  </div>

                  <div>
                    <br />
                    <button type="submit">Create Account</button>
                  </div>
                </div>
              </form>
            </div>
          </Grid>
        </div>
        <div id="footer" />
      </div>
    );
  }
}
export default CreateCompany;
