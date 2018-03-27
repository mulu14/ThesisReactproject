
import React,{Component}  from 'react'
import ViewCandidate from './ViewCandidate'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid';
import List,{ ListItem} from 'material-ui/List';
import {feachProfiles} from './../../action/action'
import CandidateList from './CandidateList'


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
        return (
            <Grid> 
                <ul>
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
                </ul>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
      profiles: state.profiles.candidate || []
      }
    }
const mapDispatchToProps = (dispatch) => {
        return {
            feachProfiles: () =>dispatch(feachProfiles())
        }
    }
      
  export default connect(mapStateToProps, mapDispatchToProps)(Candidate);  