import React,{Component} from 'react';
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Field, reduxForm } from 'redux-form';
import {login} from './../../action/logaction'
import './login.css'
import { Redirect } from 'react-router';

class Login extends Component {
    constructor(props){
        super(props)

        this.state ={
          user:{
            email: '', 
            password: ''
          },
          isLogin: false
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.updateAfterLogin = this.updateAfterLogin.bind(this); 
    
    }

  updateAfterLogin =() =>{
    this.props.isLogin
  }

      handleChange(e) {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let copyState = Object.assign({}, this.state);
        copyState.user[inputName] = inputValue;
        this.setState(copyState);
    }

      
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.user.email && this.state.user.password) {
           this.props.login(this.state.user.email, this.state.user.password);
        }
      
    }

    errorMessage() {
        if (this.props.errorMessage) {
          return (
            <div className="info-red">
              {this.props.errorMessage}
            </div>
          );
        }
      }

    render() {
        const isLoginTrue = this.props.isLogin? <Redirect to="/"/>: null
        return(
            <div className="root">
    
            <div className="head"> 
           </div>
           <div className="body">
           <Card>
               <CardContent>
           <form className="formlogin" onSubmit={this.handleSubmit}>
              <ul>
                <div>
                <input 
                  name="email"
                  type="text"
                  value = {this.state.user.email}
                  placeholder="Email"
                  onChange={this.handleChange} 
                 />
                </div>
                <div> 
                <input
                   name="password" 
                  type="password" 
                  value={this.state.user.password}
                  placeholder="Password" 
                  onChange={this.handleChange}
                  />
                </div>
                <CardActions>
                <div className="loginButton"> 
                <button type="submit"  className="blue">Login</button>
                <button type="submit" className="red">Cancel</button>
                </div>
                </CardActions>
             </ul>
       
           </form>
           </CardContent>
           </Card>
           <Card  className="placeholder"> </Card>
           </div>
      
           <div className="footerlogin"> 
           </div>
           </div>
        )
    }
}{
    
}
const mapStateToProps = (state)=>{
    return { 
      errorMessage: state.alertNotification.error,
      isLogin : state.auth.loggedIn
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      login:(email, password) =>dispatch(login(email, password))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Login));  