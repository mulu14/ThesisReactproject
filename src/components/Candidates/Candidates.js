
import React,{Component}  from 'react'
import { connect } from 'react-redux'
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


    componentDidMount() {
            //this.props.feachProfiles(); 
            console.log(this.props.state); 
        }

    handleClick() {
        this.props.feachProfiles(); 
      }

    render() {
        //console.log('this.props', feachProfiles); 
        //console.log(typeof feachProfiles);
        return (
            <div>
                <h4>This is the dashboard</h4>
                <button onClick={this.handleClick}>Knock Knock</button>
                
              
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
      profile: state.profile
      }
    }
const mapDispatchToProps = (dispatch) => {
        return {
            feachProfiles: bindActionCreators(feachProfiles, dispatch)
        }
    }
      
  export default connect(mapStateToProps, mapDispatchToProps)(Candidates);  