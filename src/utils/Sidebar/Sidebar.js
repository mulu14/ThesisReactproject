
import React from 'react'
import { Link} from 'react-router-dom';
import List, { ListItem } from 'material-ui/List';
import classNames from 'classnames';


const flexContainer = {
    color:"#2c3345", 
    backgroundColor: "#5486ff"
  };
  

const SideBar =(props) =>{
    return(
        <div> 
        <List  style={flexContainer}>
        <ListItem button component={Link}  to="/">Home</ListItem>  
        <ListItem button component={Link}  to="/companies">Companies</ListItem>  
        <ListItem button component={Link}  to="/candidates">Candidates</ListItem>  
        <ListItem button component={Link}  to="/offers">Offers</ListItem>   
        <ListItem button component={Link}  to="/bones">Boneses</ListItem>  
      <ListItem button component={Link}  to="/invitation">Invitations</ListItem> 
      </List>
    </div>

    )
  
}


export default SideBar; 