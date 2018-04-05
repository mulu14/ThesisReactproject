
import React,{Component}  from 'react'
import ViewCandidate from './ViewCandidate'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import List,{ ListItem} from 'material-ui/List';
import {feachProfiles, deleteCandidate} from './../../action/action'
import {feachSingleCandidate} from './../../action/action'
import CandidateList from './CandidateList'
import CreateCandidate from './CreateCandidate'
import './style/candidate.css'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import { withRouter, Route } from 'react-router-dom';


class Candidate extends Component {
    constructor (props){
        super (props)
      }
      
    componentWillMount() {
        this.props.feachProfiles(); 
    }


    deleteCandidateAction =(id)=>{
          deleteCandidate(id)
      }
      
    render() {
        if (this.props.profiles.length === 0) return null;
        
        const listcandidate =() =>{
            return(
                <Paper className="root">
                <Table className="table">
                    <TableHead>
                    <TableRow><TableCell variant="head">Candidate List</TableCell></TableRow>
                     </TableHead>
                    <TableBody>
                    {
                    this.props.profiles.map((profile)=>{
                       return(
                       <CandidateList
                        key={profile.id}
                        title={profile.title}
                        id= {profile.id}
                        deleteCandidateAction={this.props.deleteCandidateAction}
                        />)
                    })  
                    }
              </TableBody>
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
      
  export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Candidate));  