
import React from 'react'
import { Link} from 'react-router-dom';
import List, { ListItem } from 'material-ui/List';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';

const flexContainer = {
    color:"#2c3345", 
    backgroundColor: "#5486ff"
  };
const drawerWidth = 240;

const styles = theme => ({
  base: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    backgroundColor: "#5486ff"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});
  
const SideBar =(props) =>{
  const { classes} = props;
    return(
      <Grid item xs={3}>
      <Drawer
       variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }} >
      <Divider/>
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
     </Drawer> 
  </Grid>
        

    )
  
}


SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideBar);
