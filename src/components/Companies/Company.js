
import React,{Component} from 'react';
import {getCompanies} from './../../action/companyaction'
import { connect } from 'react-redux'
import CompaniesList from './CompaniesList'
import Table, { TableBody, TableCell, TableHead, TableRow, TablePagination,
    TableSortLabel,  TableFooter } from 'material-ui/Table';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import  Pagination from './../../services/pagination'
import JwPagination from 'jw-react-pagination';

class Company extends Component {
    constructor(props){
        super(props); 
        this.state ={
            page: 0,
            rowsPerPage: 2,
        }   
        this.handleChangePage = this.handleChangePage.bind(this); 
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this); 
    }
    componentWillMount() {
        this.props.getCompanies(); 
    }

    handleChangePage = (event, page) => {
        this.setState({
             page });
      };
    
      handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
      };




    render() {
        if (this.props.companies.length === 0) return null;
         const emptyRows = this.state.rowsPerPage - Math.min
        (this.state.rowsPerPage, this.props.companies.length - this.state.page * this.state.rowsPerPage);
        const listCompany =() =>{
            return(
                <Paper className="root">
                <Table className="table">
                    <TableHead>
                    <TableRow>
                        <TableCell variant="head">Company Name</TableCell>
                        <TableCell variant="head"> Published Status </TableCell>
                        <TableCell variant="head"> Created Date </TableCell>
                        </TableRow>
                     </TableHead>
                    <TableBody>
                  {
            
                this.props.companies.slice(this.state.page * this.state.rowsPerPage,
                this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((company)=>{
                       return(
                       <CompaniesList
                       id={company._id}
                       companyname = {company.nameOfCompany}
                       publishedStatus= {company.publishStatus}
                       createdDate = {company.date}
                        />)
                    })  
                    }

                       {emptyRows > 0 && (
                        <TableRow style={{ height: 48 * emptyRows }}>
                        <TableCell colSpan={6} />
                        </TableRow>
              )}
              </TableBody>
              <TableFooter> 
              <TablePagination
                  colSpan={3}
                  count={this.props.companies.length}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={Pagination}
                />
              </TableFooter>
            </Table>
            </Paper>
                
            )
        }
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
      }
    }
const mapDispatchToProps = (dispatch) => {
        return {
           getCompanies : () =>dispatch(getCompanies())
        }
    }

 export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Company);  

