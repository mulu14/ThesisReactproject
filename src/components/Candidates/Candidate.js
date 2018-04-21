
import React,{Component}  from 'react'
import ViewCandidate from './ViewCandidate'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import List,{ ListItem} from 'material-ui/List';
import {feachProfiles, deleteCandidate, feachSingleCandidate} from './../../action/candidateaction'
import CandidateList from './CandidateList'
import './style/candidate.css'
import Table, { TableBody, TableCell, TableHead, TableRow, TablePagination,  TableFooter,TableSortLabel } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteIcon from 'material-ui';
import {FilterList} from 'material-ui-icons'
import IconButton from 'material-ui/IconButton';
import JwPagination from 'jw-react-pagination';
import  Pagination from './../../services/pagination'



class Candidate extends Component {
    constructor (props){
        super (props)
        let pageArray = [...this.props.profiles.keys()].map(i => ({ id: (i+1), name: 'page ' + (i+1) }));
 
        this.state= {
            close: true, 
            sorted: false,
            pageArray : pageArray,
            pageOfcandidate: []
        }
        this.sortCandidatebyName = this.sortCandidatebyName.bind(this);    
      }
      
    componentWillMount() {
        this.props.feachProfiles(); 
    }

    
    onChangePage(pageOfItems) {
        this.setState({ 
            ...this.state,
            pageOfcandidate: this.state.pageOfcandidate
        });
    }
 
    deleteCandidateAction =(id)=>{
          deleteCandidate(id)
      }

    sortCandidatebyName =() =>{
        if (this.props.profiles.length === 0) return null;
       this.props.profiles.sort((a,b) =>{return (a.account.firstname > b.account.firstname) ? 1 : ((b.account.firstname > a.account.firstname) ? -1 : 0);} );
       this.setState({
           ...this.state,
           sorted: !this.state.sorted,
       })
    }
      
    render() {

        if (this.props.profiles.length === 0) return null;
       
      
        const listcandidate =() =>{
            return(
                <Paper className="root">
                <Table className="table">
                    <TableHead>
                        <TableRow>
                        <TableCell>First Name</TableCell>
                        <TableCell>City</TableCell>
                        <TableCell>
                        Publish Status
                        <IconButton onClick={this.sortCandidatebyName}><FilterList/></IconButton>
                        </TableCell>
                        <TableCell>Register Date</TableCell>
                        </TableRow>
                       
                    </TableHead>
                    <TableBody>
                    {
                    this.props.profiles.map((profile)=>{
                       return(
                       <CandidateList
                        key={profile._id}
                        firstname={profile.account.firstname}
                        city={profile.city}
                        publishStatus={profile.publishStatus}
                        date={profile.date}
                        id= {profile._id}
                        deleteCandidateAction={this.props.deleteCandidateAction}
                        />)
                    })  
                    }
              </TableBody>
              <TableFooter> 
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