import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from './../../components/Candidates/Profile'; 
import Candidates from './../../components/Candidates/Candidates'
import Companies from './../../components/Companies/Companies.js'
import Offers from './../../components/Offers/Offers'
import Invitations from './../../components/Invitations/Invitations'
import Bonses from './../../components/Boneses/Bonses'
import Logout from './../Logout/Logout';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';




const styles = theme => ({
 
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

  const ConfigRoute = (props) => {
    const {classes} = props; 
    return(
      <Grid item xs={9}>
        <main className={classes.content}> 
          <Switch>
                      <Route exact={true} path="/" component={Profile}/>
                      <Route path="/companies" component={Companies}/>
                      <Route path="/candidates" component={Candidates}/>
                      <Route path="/offers" component={Offers}/>    
                      <Route path="/bones" component={Bonses}/>
                      <Route path="/logout" component={Logout}/>
                      <Route path="/profile" component={Profile}/>
                      <Route path="/invitation" component={Invitations}/>
            </Switch>
        </main>
        </Grid>
    )
    
  };

 ConfigRoute.propTypes = {
    classes: PropTypes.object.isRequired,
  }; 
  export default withStyles(styles)(ConfigRoute);
  