import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import './style/create.css'


class CreateCompany extends Component{
    constructor(props){
        super(props)
        this.state ={
            company:{
                firstname: '',
                lastname: '',
                email: '', 
                phone: '',
            }
        }
    }

        render(){
            return(

             <div className="wrapper">
	        	<div id="header">
                <Grid container spacing={8}> 
                </Grid>
             </div>
		   <div className="content">
           <Grid container spacing={8}> 
           <div>
            <form>
                <div className="form">  
                    <div>
                        <label> First name: </label>
                        <input type="text" name="name" />
                        </div>
                    <div>
                        <label>Last name:</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="name" />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="number" name="name" />
                    </div>
                    <div>
                    </div>   
                    </div>
                    <div className="benifits">
                        <p> What kinds of benefits do you offers?</p>
                     <div>
                        <ul className="colm-1">
                          <li><input type="checkbox"  name="balance" value="balance"/><label> Balance</label> </li>
                          <li><input type="checkbox"  name="car" value="car"/><label>Car</label> </li>
                          <li><input type="checkbox"  name="bonsemodel" value="bonsemodel"/><label>Bonse Model</label> </li>
                          <li><input type="checkbox"  name="centraloffice" value="centraloffice"/><label>Central Office</label></li>
                          <li><input type="checkbox"  name="ownership" value="ownership"/> <label>Ownership</label> </li>
                          <li><input type="checkbox"  name="ownresponsiblity" value="ownresponsiblity"/><label>Own responsiblity</label> </li>
                          <li><input type="checkbox"  name="monthlysalary" value="monthleysalary"/><label>Monthely salary</label> </li>
                          <li><input type="checkbox"  name="flexiableworkingtime" value="flexiableworkingtime"/><label>Flexiable working </label> </li>
                        </ul>
                        </div>
                        <div>
                        <ul className="colm-2">
                          <li><input type="checkbox"  name="freedom" value="freedom"/><label> Freedom</label> </li>
                          <li><input type="checkbox"  name="medicalallowance" value="medicalallowance"/><label>Medical allowance</label> </li>
                          <li><input type="checkbox"  name="careergrowth" value="careergrowth"/><label>Career growth</label> </li>
                          <li><input type="checkbox"  name="codedays" value="codedays"/><label>Code days</label></li>
                          <li><input type="checkbox"  name="competitivesalary" value="competitivesalary"/> <label>Competitive salary</label> </li>
                          <li><input type="checkbox"  name="morethan25daysholidays" value="morethan25daysholidays"/><label> more than 25 days holidays</label> </li>
                          <li><input type="checkbox"  name="workfromhome" value="workfromhome"/><label>Possiblity work from home</label> </li>
                          <li><input type="checkbox"  name="workindistance" value="workindistance"/><label>Possiblity to work in distance</label> </li>
                        </ul>
                        </div>
                        <div>
                        <ul className="colm-3">
                          <li><input type="checkbox"  name="newtechnique" value="newtechnique"/><label>New technique</label> </li>
                          <li><input type="checkbox"  name="Healthinsurance" value="Healthinsurance"/><label>Health Insurance</label> </li>
                          <li><input type="checkbox"  name="stableworlingsituation" value="stableworlingsituation"/><label>Stable worling situation</label> </li>
                          <li><input type="checkbox"  name="toothInsurance" value="toothInsurance"/><label>Tooth Insurance</label></li>
                          <li><input type="checkbox"  name="pension" value="pension"/> <label> Pension</label> </li>
                          <li><input type="checkbox"  name="supportsystem" value=">supportsystem"/><label>Support system</label> </li>
                          <li><input type="checkbox"  name="developementpossiblity" value="developementpossiblity"/><label>Developement Possiblity</label> </li>
                          <li><input type="checkbox"  name="flexiableworkingtime" value="flexiableworkingtime"/><label>Place holder</label> </li>
                        </ul>
                         </div>
                        </div>
                                            
                     <div> 
                       <button type="submit">Subscribe</button>
                       </div>
            </form>
            </div>
                </Grid>
           </div>
		    <div id="footer">
            
            </div>
	       </div>

            )
        }

}
export default CreateCompany; 