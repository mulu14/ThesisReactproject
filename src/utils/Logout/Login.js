import React from 'react'
import './login.css'
import Card, { CardActions, CardContent } from 'material-ui/Card';




const Logout = () =>{
    return(
        <div className="root">

        <div className="head"> 
       </div>
       <div className="body">
       <Card>
           <CardContent>
       <form className="formlogin">
          <ul>
            <div>
            <label> UserName</label>
            <li><input type="text" name="username"/> </li>
            </div>
            <div> 
            <label> Password</label>
            <li><input type="password" name="password"/> </li>
            </div>
            <CardActions>
            <div className="loginButton"> 
             <button> Login </button>
             <button> Cancel </button>
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

export default Logout; 