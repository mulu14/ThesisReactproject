
import React,{Component}  from 'react'
import ViewCandidate from './ViewCandidate'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import List,{ ListItem} from 'material-ui/List';
import {feachProfiles, deleteCandidate, feachSingleCandidate} from './../../action/candidateaction'
import CandidateList from './CandidateList'
import './style/candidate.css'
import Table, { TableBody, TableCell, TableHead, TableRow, TablePagination,
    TableSortLabel,  TableFooter } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withRouter, Route } from 'react-router-dom';
import DeleteIcon from 'material-ui';
import {FilterList} from 'material-ui-icons'
import IconButton from 'material-ui/IconButton';
import JwPagination from 'jw-react-pagination';
import  Pagination from './../../services/pagination'
import Toolbar from 'material-ui/Toolbar';
import Tooltip from 'material-ui/Tooltip';
import {ArrowDownward, ArrowUpward} from 'material-ui-icons'


class Candidate extends Component {
    constructor (props){
        super (props)
    
        this.state= {
            close: true, 
            sorted: false,
            page: 0,
            rowsPerPage: 10,
            copyprofile: {}
        }
        this.sortAscending = this.sortAscending.bind(this); 
        this.sortDescending = this.sortDescending.bind(this); 
        this.handleChangePage = this.handleChangePage.bind(this); 
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this); 
      }

     
      
    componentWillMount() {
        this.props.feachProfiles(); 
        this.setState({copyprofile: this.props.profiles})
    }

     
    
    handleChangePage = (event, page) => {
        this.setState({
             page });
      };
    
      //
      handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
      };
 // delete function
 //parsms id

    deleteCandidateAction =(id)=>{
          deleteCandidate(id)
      }
// sort array in decinding order
// params: the api response 
// setState sored true
     sortAscending =() =>{
        if (this.props.profiles.length === 0) return null;
       this.props.profiles.sort((a,b) =>{return (a.account.firstname > b.account.firstname) ? 1 : ((b.account.firstname > a.account.firstname) ? -1 : 0);} );
       this.setState({
        ...this.state,
        sorted: !this.state.sorted,
    })
    }
  // sort array in decinding order
// params: the api response 
// setState sored false
    sortDescending =() =>{
        if (this.props.profiles.length === 0) return null;
       this.props.profiles.sort((a,b) =>{return (b.account.firstname > a.account.firstname) ? 1 : ((a.account.firstname > b.account.firstname) ? -1 : 0);} );
       this.setState({
        ...this.state,
        sorted: !this.state.sorted,
    })
    }
      
    render() {

        if (this.props.profiles.length === 0) return null;
        const emptyRows = this.state.rowsPerPage - Math.min
        (this.state.rowsPerPage, this.props.profiles.length - this.state.page * this.state.rowsPerPage);
        console.log(this.state.copyprofile); 
        const issort  = this.state.sorted? <ArrowUpward/> : <ArrowDownward/>

        const listcandidate =() =>{
            return(
                <Paper className="root">

                <Toolbar>
                     <Tooltip title="Filter list">
                        <IconButton aria-label="Filter list">
                           <FilterList/>
                        </IconButton>
                    </Tooltip>
                     </Toolbar>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell onClick={this.state.sorted? this.sortAscending: this.sortDescending}>
                        {issort}
                        Publish Status
                        </TableCell>
                        <TableCell>Register Date</TableCell>
                        </TableRow>
                       
                    </TableHead>
                   
                    <TableBody>
                    {
                    this.props.profiles.slice(this.state.page * this.state.rowsPerPage,
                         this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((profile)=>{
                       return(
                       <CandidateList
                        key={profile._id}
                        id={profile._id}
                        firstname={profile.account.firstname}
                        city={profile.city}
                        publishStatus={profile.publishStatus}
                        date={profile.date}
                        id= {profile._id}
                        deleteCandidateAction={this.props.deleteCandidateAction}
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
                  count={this.props.profiles.length}
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
            {listcandidate()} 
        </Grid>
        );
    }
}





const mapStateToProps = state => {
    return {
      profiles: state.profiles.candidates || []
      }
    }
const mapDispatchToProps = (dispatch) => {
        return {
            feachProfiles: () =>dispatch(feachProfiles()),
            deleteCandidateAction:(id) => dispatch(deleteCandidate(id))

        }
    }
      
  export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Candidate);  

  //export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Candidate));  