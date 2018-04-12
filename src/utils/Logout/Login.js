import React,{Component} from 'react';
import { connect } from 'react-redux'
import { withRouter} from 'react-router-dom';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Field, reduxForm } from 'redux-form';
import {login} from './../../action/logaction'
import './login.css'





class Login extends Component {
    constructor(props){
        super(props)

        this.state ={
          user:{
            email: '', 
            password: ''
          }
         
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    submit = (values) => {
        console.log(values);
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
 
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
           this.props.login(email, password); 
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
                <input name="email"
                  type="text"
                  placeholder="Email"
                  onChange={this.handleChange} 
                 />
                </div>
                <div> 
                <input name="password" 
                  type="password" 
                  placeholder="Password" 
                  onChange={this.handleChange}
                  />
                </div>
                <CardActions>
                <div className="loginButton"> 
                <button type="submit" className="blue">Login</button>
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
      user : state.auth.user,
      errorMessage: state.alertNotification.error 
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      login:(email, password) =>dispatch(login(email, password))
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Login));  