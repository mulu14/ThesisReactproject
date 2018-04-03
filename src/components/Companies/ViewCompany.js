import React from 'react'



const ViewCompany = (props) =>{

    return(
        <div >
            <div class="container">
         <form>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname"/>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" />
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject"style="height:200px"></textarea>
            <input type="submit" value="Submit"/>
            </form>
        </div>
            
        </div>
    )

}