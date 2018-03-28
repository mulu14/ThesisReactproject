
import React,{Component}  from 'react'
import ViewCandidate from './ViewCandidate'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import List,{ ListItem} from 'material-ui/List';
import {feachProfiles} from './../../action/action'
import {feachSingleCandidate} from './../../action/action'
import CandidateList from './CandidateList'
import CreateCandidate from './CreateCandidate'
import './candidate.css'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


class Candidate extends Component {
    constructor (props){
        super (props)
      }
    componentWillMount() {
            this.props.feachProfiles(); 
           }

    handleClick() {
      }
      componentWillUnmount() {
      }

      editCandiadte =(id) =>{

      }
      addCandidate =(Candidate) =>{

      }
      viewCandidate =(id) => {

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
                        editCandiadte = {this.editCandiadte.bind(this, profile.id)} 
                        addCandidate = {this.addCandidate.bind(this)}
                        title={profile.title}
                        id= {profile.id}
                        />)
                    })  
                    }
              </TableBody>
            </Table>
            </Paper>
                
            )

        }

        return (
        <Grid> 
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
            feachSingleCandidate: (id) => dispatch(feachSingleCandidate(id))

        }
    }
      
  export default connect(mapStateToProps, mapDispatchToProps)(Candidate);  