import React, { Component } from 'react';
import Card from 'material-ui/Card';
import { getCompanies } from './../../action/companyaction';
import ListBonses from './bonseList';
import ReactPerformance from 'react-performance';

class Bonses extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getCompanies();
  }

  render() {
    if (this.props.companies.length === 0) return null;
    ReactPerformance.startRecording();
    ReactPerformance.printRecording();

    const bonseList = () => {
      return (
        <Card>
          {this.props.companies.map(company => {
            return (
              <ListBonses
                key={company._id}
                name={company.nameOfCompany}
                bonses={company.benefitsList}
              />
            );
          })}
        </Card>
      );
    };
    return (
      <div className="root">
        <div className="header"> </div>
        <div className="body">{bonseList()}</div>
        <div className="footer">
          <Card className="placeholder" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companydata.companies || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCompanies: () => dispatch(getCompanies())
  };
};

export default ReactPerformance.connect({
  mapStateToProps,
  mapDispatchToProps,
  getId: 'id_Bonses',
  Component: Bonses
});
