
import React,{Component}  from 'react'
import CandidateDetail from './CandidateDetail'
import { connect } from 'react-redux'
import data from './../../store/store.json'
import {userApi} from './../../readApi/userApi'
import {feachProfiles} from './../../action/action'
import { bindActionCreators } from 'redux'


class Candidates extends Component {

    constructor (props){
        super (props)
        this.handleClick = this.handleClick.bind(this); 
      }

    state = {
        diplay: ''
    }


    componentWillMount() {
            this.props.feachProfiles(); 
        
        }

    handleClick() {
      }



      componentWillUnmount() {
       // this.feachProfiles.abort();
      }
      

    render() {
       // console.log(this.props.profile);
       var x = this.props.profiles.topSkills; 
       console.log(x);     
    
    
        return (
            <div>
                 <CandidateDetail
                 profile ={this.props.profile}
                 //account= {this.props.profile.account}
                // topSkills = {this.props.profile.topSkills}
                // skills = {this.props.profile.skills}
                // benefits = {this.props.profile.benefits}
                // publishInfo = {this.props.profile.publishInfo}
                // workExperiences = {this.props.profile.workExperiences}
                // projectExperiences = {this.props.profile.projectExperiences}
                // educations = {this.props.profile.educations}
                 />
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      profiles: state.profiles.candidate
      }
    }
const mapDispatchToProps = (dispatch) => {
        return {
            feachProfiles: bindActionCreators(feachProfiles, dispatch)
        }
    }
      
  export default connect(mapStateToProps, mapDispatchToProps)(Candidates);  