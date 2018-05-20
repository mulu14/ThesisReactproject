import React, { Component } from 'react';
import { getCompanies } from './../../action/companyaction';
import CompaniesList from './CompaniesList';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  TableFooter
} from 'material-ui/Table';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Pagination from './../../services/pagination';
import { ArrowDownward, ArrowUpward } from 'material-ui-icons';
import ReactPerformance from 'react-performance';

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
      page: 0,
      rowsPerPage: 10
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    this.sortAscending = this.sortAscending.bind(this);
    this.sortDescending = this.sortDescending.bind(this);
    this.convertNumbertoStatus = this.convertNumbertoStatus.bind(this);
  }
  componentWillMount() {
    this.props.getCompanies();
  }

  handleChangePage = (event, page) => {
    this.setState({
      page
    });
  };

  convertNumbertoStatus = parm => {
    if (parm === 1) {
      return 'Not Published';
    }
    if (parm === 2) {
      return 'Waiting';
    }
    if (parm === 3) {
      return 'Approved';
    }
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  sortAscending = () => {
    if (this.props.companies.length === 0) return null;
    this.props.companies.sort((a, b) => {
      return a.publishStatus > b.publishStatus
        ? 1
        : b.publishStatus > a.publishStatus
          ? -1
          : 0;
    });
    this.setState({
      ...this.state,
      sorted: !this.state.sorted
    });
  };
  // sort array in decinding order
  // params: the api response
  // setState sored false
  sortDescending = () => {
    if (this.props.companies.length === 0) return null;
    this.props.companies.sort((a, b) => {
      return b.publishStatus > a.publishStatus
        ? 1
        : a.publishStatus > b.publishStatus
          ? -1
          : 0;
    });
    this.setState({
      ...this.state,
      sorted: !this.state.sorted
    });
  };

  sortCompanyByStatus = () => {
    if (this.props.companies.length === 0) return null;
    this.props.companies.sort((a, b) => {
      return a.publishStatus > b.publishStatus
        ? 1
        : b.publishStatus > a.publishStatus
          ? -1
          : 0;
    });
    this.setState({
      ...this.state,
      sorted: !this.state.sorted
    });
  };

  render() {
    if (this.props.companies.length === 0) return null;
    //console.log(this.props.companies)
    const emptyRows =
      this.state.rowsPerPage -
      Math.min(
        this.state.rowsPerPage,
        this.props.companies.length - this.state.page * this.state.rowsPerPage
      );
    const issort = this.state.sorted ? <ArrowUpward /> : <ArrowDownward />;
    ReactPerformance.startRecording();
    ReactPerformance.printRecording();

    const listCompany = () => {
      return (
        <Paper className="root">
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell variant="head">Company Name</TableCell>
                <TableCell
                  onClick={
                    this.state.sorted ? this.sortAscending : this.sortDescending
                  }
                >
                  {issort}
                  Published Status
                </TableCell>
                <TableCell variant="head"> Created Date </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.companies
                .slice(
                  this.state.page * this.state.rowsPerPage,
                  this.state.page * this.state.rowsPerPage +
                    this.state.rowsPerPage
                )
                .map(company => {
                  return (
                    <CompaniesList
                      id={company._id}
                      key={company._id}
                      companyname={company.nameOfCompany}
                      publishedStatus={company.publishStatus}
                      createdDate={company.date}
                      convertNumbertoStatus={this.convertNumbertoStatus}
                    />
                  );
                })}

              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={this.props.companies.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={Pagination}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      );
    };
    return (
      <Grid container spacing={8}>
        {listCompany()}
      </Grid>
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
  pure: false,
  getId: 'id_company',
  Component: Company
});
