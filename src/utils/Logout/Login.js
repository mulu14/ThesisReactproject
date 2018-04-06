import React,{Component} from 'react';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import { Field, reduxForm } from 'redux-form';
import './login.css'





class Login extends Component {
    constructor(props){
        super(props)

        this.state ={

        }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    submit = (values) => {
        console.log(values);
      }
      
    handleSubmit =()=>{

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
                <Field name="email"
                  component="input"
                  type="text"
                  placeholder="Email" 
                 />
                </div>
                <div> 
                <Field name="password" 
                  component="input"
                  type="password" 
                  placeholder="Password" 
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
    return { errorMessage: state.auth.error };
  }
export default reduxForm({
    form: 'signin'
  })(Login);