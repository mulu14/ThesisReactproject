
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
import { Link } from 'react-router-dom';
import {FilterList} from 'material-ui-icons'
import IconButton from 'material-ui/IconButton';

class Company extends Component {
    constructor(props){
        super(props); 
        this.state ={
            sorted: false,
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


      sortCompanyByStatus =() =>{
        if (this.props.companies.length === 0) return null;
       this.props.companies.sort((a,b) =>{return (a.publishStatus > b.publishStatus) ? 1 : ((b.publishStatus > a.publishStatus) ? -1 : 0);} );
       this.setState({
           ...this.state,
           sorted: !this.state.sorted,
       })
    }


    render() {
        if (this.props.companies.length === 0) return null;
        console.log(this.props.companies)
         const emptyRows = this.state.rowsPerPage - Math.min
        (this.state.rowsPerPage, this.props.companies.length - this.state.page * this.state.rowsPerPage);
        const listCompany =() =>{
            return(
                <Paper className="root">
                <Table className="table">
                    <TableHead>
                    <TableRow>
                        <TableCell variant="head">Company Name</TableCell>
                        <TableCell variant="head"> Published Status
                        <IconButton
                        onClick={this.sortCompanyByStatus}><FilterList/>
                        </IconButton>
                        
                         </TableCell>
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
                       key={company._id}
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

