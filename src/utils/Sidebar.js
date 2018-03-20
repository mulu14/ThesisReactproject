
import React from 'react'
import { Link} from 'react-router-dom';
import { ListItem } from 'material-ui/List';



const SideBar =() =>{
    return(
        <div> 

        <ListItem button component={Link}  to="/">Home</ListItem>  
        <ListItem button component={Link}  to="/companies">Companies</ListItem>  
        <ListItem button component={Link}  to="/candidates">Candidates</ListItem>  
        <ListItem button component={Link}  to="/offers">Offers</ListItem>   
        <ListItem button component={Link}  to="/bones">Boneses</ListItem>  
      <ListItem button component={Link}  to="/invitation">Invitations</ListItem> 
    </div>

    )
  
}


export default SideBar; 