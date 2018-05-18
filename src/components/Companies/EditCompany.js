import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import Card, { CardContent } from 'material-ui/Card';
import { getSingleCompany } from './../../action/companyaction';
import Chip from 'material-ui/Chip';
import './style/create.css';
import { Button } from 'material-ui';
import ReactPerformance from 'react-performance';

class EditCompany extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      company: {
        nameOfCompany: '',
        numberOfEmployee: '',
        phone: '',

        benefitsList: [
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          },
          {
            code: false
          }
        ],
        intrestfromCandidates: '',
        companylogo: '',
        includedInStack: [
          {
            title: ''
          },
          {
            title: ''
          },
          {
            title: ''
          }
        ]
      }
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelChangebenefit = this.handelChangebenefit.bind(this);
    this.onClickStack = this.onClickStack.bind(this);
  }

  componentWillMount() {
    if (this.props.match.params) {
      const { id } = this.props.match.params;
      this.props.getSingleCompany(id);
      this.setState({ company: this.props.companyprofile });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.companyprofile._id != nextProps.companyprofile._id) {
      this.setState({ company: nextProps.companyprofile });
    }
  }

  /*
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.companyprofile.length !== nextProps.companyprofile.length) {
          return true;
        }
    
        return false;
      }
      */

  onClickStack = () => {
    this.setState({ visible: !this.state.visible });
  };

  handelChangebenefit = (e, item) => {
    const company = Object.assign({}, this.state.company);
    const cloneBenefit = this.state.company.benefitsList.map(benefit => {
      return benefit.title === item
        ? { ...benefit, code: e.target.checked }
        : benefit;
    });
    this.setState({ company: { ...company, benefitsList: cloneBenefit } });
  };

  handelChange = e => {
    const companyClone = Object.assign({}, this.state.company);
    const benefitClone = Object.assign({}, this.state.company.benefitsList);
    const includedInStackClone = Object.assign(
      {},
      this.state.company.includedInStack
    );
    let balance = companyClone.benefitsList[0].code;
    let nameofCompany = companyClone.nameOfCompany;
    let phone = companyClone.phone;
    let numberOfEmployee = companyClone.numberOfEmployee;
    let companylogo = companyClone.companylogo;

    switch (e.target.name) {
      case 'companyname':
        nameofCompany = e.target.value;
        break;
      case 'phonenumber':
        phone = e.target.lastname;
        break;
      case 'numberOfEmployee':
        numberOfEmployee = e.target.value;
        break;
      case 'logo':
        companylogo = e.target.value;
        break;
      case 'balance':
        this.setState({ balance: !balance });
        break;
      case 'headlineInput':
        break;
      case 'experience1':
        break;
      case 'titleone':
        titleOne: e.target.value;
        break;
      default:
        console.log('Error');
    }
    benefitClone[0].code = balance;
    companyClone['nameOfCompany'] = nameofCompany;
    companyClone['phone'] = phone;
    companyClone['numberOfEmployee'] = numberOfEmployee;
    companyClone['companylogo'] = companylogo;
    companyClone['benefitsList'] = benefitClone;

    this.setState({ company: companyClone });
  };

  render() {
    if (this.props.companyprofile.length === 0) return null;
    const isvisibale = this.state.visible;
    const visiblity = this.isvisibale ? null : <input type="text" />;
    ReactPerformance.startRecording();
    ReactPerformance.printRecording();
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
                      <label>Name of Company</label>
                      <input
                        type="text"
                        name="companyname"
                        value={this.state.company.nameOfCompany || ''}
                        onChange={this.handelChange}
                      />
                    </div>
                  </div>

                  <div />
                </div>

                <div className="benifits">
                  <p> What kinds of benefits do you offers?</p>
                  <div>
                    <ul className="colm-1">
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[0].title}
                          value={this.state.company.benefitsList[0].code}
                          checked={this.state.company.benefitsList[0].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[0].title
                            )
                          }
                        />
                        <label> Balance</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[1].title}
                          value={this.state.company.benefitsList[1].code}
                          checked={this.state.company.benefitsList[1].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[1].title
                            )
                          }
                        />
                        <label>Car</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[2].title}
                          value={this.state.company.benefitsList[2].code}
                          checked={this.state.company.benefitsList[2].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[2].title
                            )
                          }
                        />
                        <label>Bonse Model</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[3].title}
                          value={this.state.company.benefitsList[3].code}
                          checked={this.state.company.benefitsList[3].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[3].title
                            )
                          }
                        />
                        <label>Central Office</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[4].title}
                          value={this.state.company.benefitsList[4].code}
                          checked={this.state.company.benefitsList[4].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[4].title
                            )
                          }
                        />{' '}
                        <label>Ownership</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[5].title}
                          value={this.state.company.benefitsList[5].code}
                          checked={this.state.company.benefitsList[5].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[5].title
                            )
                          }
                        />
                        <label>Own responsiblity</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[6].title}
                          value={this.state.company.benefitsList[6].code}
                          checked={this.state.company.benefitsList[6].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[6].title
                            )
                          }
                        />
                        <label>Monthely salary</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[7].title}
                          value={this.state.company.benefitsList[7].code}
                          checked={this.state.company.benefitsList[7].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[7].title
                            )
                          }
                        />
                        <label>Flexiable working </label>{' '}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul className="colm-2">
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[8].title}
                          value={this.state.company.benefitsList[8].code}
                          checked={this.state.company.benefitsList[8].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[8].title
                            )
                          }
                        />
                        <label> Freedom</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[9].title}
                          value={this.state.company.benefitsList[9].code}
                          checked={this.state.company.benefitsList[9].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[9].title
                            )
                          }
                        />
                        <label>Medical allowance</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[10].title}
                          value={this.state.company.benefitsList[10].code}
                          checked={this.state.company.benefitsList[10].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[10].title
                            )
                          }
                        />
                        <label>Career growth</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[11].title}
                          value={this.state.company.benefitsList[11].code}
                          checked={this.state.company.benefitsList[11].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[11].title
                            )
                          }
                        />
                        <label>Code days</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[12].title}
                          value={this.state.company.benefitsList[12].code}
                          checked={this.state.company.benefitsList[12].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[12].title
                            )
                          }
                        />{' '}
                        <label>Competitive salary</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[13].title}
                          value={this.state.company.benefitsList[13].code}
                          checked={this.state.company.benefitsList[13].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[13].title
                            )
                          }
                        />
                        <label> more than 25 days holidays</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[14].title}
                          value={this.state.company.benefitsList[14].code}
                          checked={this.state.company.benefitsList[14].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[14].title
                            )
                          }
                        />
                        <label>Possiblity work from home</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[15].title}
                          value={this.state.company.benefitsList[15].code}
                          checked={this.state.company.benefitsList[15].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[15].title
                            )
                          }
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
                          name={this.state.company.benefitsList[16].title}
                          value={this.state.company.benefitsList[16].code}
                          checked={this.state.company.benefitsList[16].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[16].title
                            )
                          }
                        />
                        <label>New technique</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[17].title}
                          value={this.state.company.benefitsList[17].code}
                          checked={this.state.company.benefitsList[17].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[17].title
                            )
                          }
                        />
                        <label>Health Insurance</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[18].title}
                          value={this.state.company.benefitsList[18].code}
                          checked={this.state.company.benefitsList[18].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[18].title
                            )
                          }
                        />
                        <label>Stable worling situation</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[19].title}
                          value={this.state.company.benefitsList[19].code}
                          checked={this.state.company.benefitsList[19].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[19].title
                            )
                          }
                        />
                        <label>Tooth Insurance</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[20].title}
                          value={this.state.company.benefitsList[20].code}
                          checked={this.state.company.benefitsList[20].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[20].title
                            )
                          }
                        />{' '}
                        <label> Pension</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[21].title}
                          value={this.state.company.benefitsList[21].code}
                          checked={this.state.company.benefitsList[21].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[21].title
                            )
                          }
                        />
                        <label>Support system</label>{' '}
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          name={this.state.company.benefitsList[22].title}
                          value={this.state.company.benefitsList[22].code}
                          checked={this.state.company.benefitsList[22].code}
                          onChange={e =>
                            this.handelChangebenefit(
                              e,
                              this.state.company.benefitsList[22].title
                            )
                          }
                        />
                        <label>Developement Possiblity</label>{' '}
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
                  <br />
                  <div>
                    <Card>
                      <CardContent>
                        <ul className="organizationInfo">
                          <div className="infoline">
                            <label> Phone number </label>
                            <input
                              type="text"
                              name="phonenumber"
                              value={this.state.company.phone || ''}
                              onChange={this.handelChange}
                            />
                          </div>
                          <div className="infoline">
                            <label>Number of Employees</label>
                            <input
                              type="text"
                              name="numberOfEmployee"
                              value={this.state.company.numberOfEmployee || ''}
                              onChange={this.handelChange}
                            />
                          </div>
                          <div>
                            <label> Company Official web </label>
                            <input
                              type="url"
                              name="officialpage"
                              value=""
                              onChange={this.handelChange}
                            />
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
                        <input
                          type="text"
                          name="logo"
                          value={this.state.company.companylogo || ''}
                          onChange={this.handelChange}
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <p> Company Description</p>
                    <textarea
                      rows="10"
                      cols="152"
                      value={this.state.company.intrestfromCandidates || ''}
                      onChange={this.handelChange}
                    />
                  </div>
                  <br />
                  <div>
                    <p> What is included in teck Stack</p>
                    <Chip
                      label={this.state.company.includedInStack[0].title}
                      clickable="true"
                      onClick={this.onClickStack}
                    />
                    <Chip
                      label={this.state.company.includedInStack[1].title}
                      clickable="true"
                      onClick={this.onClickStack}
                    />

                    <Chip
                      label={this.state.company.includedInStack[2].title}
                      clickable="true"
                      onClick={this.onClickStack}
                    />
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

const mapStateToProps = state => {
  return {
    companyprofile: state.companydata.company || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSingleCompany: id => dispatch(getSingleCompany(id))
  };
};

export default ReactPerformance.connect({
  mapStateToProps,
  mapDispatchToProps,
  getId: 'id_EditCompany',
  Component: EditCompany
});
