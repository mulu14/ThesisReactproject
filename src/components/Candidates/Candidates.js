
import React,{Component, PropTypes}  from 'react';
import { connect } from 'react-redux';
import {userApi} from './../../readApi/userApi'
import {REQUEST_PROFILE} from './../../action/actionTypes'


class Candidates extends Component {

    constructor (props){
        super (props)
      }

    componentDidMount() {
    }

    handleClick() {
        this.props.userApi.userApi(); 
      }

    render() {
        const { records } = this.props;
        return (
            <div>
                <h4>This is the dashboard</h4>
                <button onClick={this.props.OnrequestProfile}>Knock Knock</button>
                {console.log(this.props.profile.length)}
              
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
      profile: state.profile
      }
    }
const mapDispatchToProps = dispatch => {
        return {
          OnrequestProfile: () => dispatch()
          }
        }
      
  export default connect(mapStateToProps, mapDispatchToProps)(Candidates);  