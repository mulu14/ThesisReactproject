import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles';
import { getSingleCompany} from './../../action/companyaction'
import List, { ListItem } from 'material-ui/List'
import { bindActionCreators } from 'redux'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';


class ViewCompany extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  componentWillMount(){
    if(this.props.match.params){
      const { id } = this.props.match.params;
      this.props.getSingleCompany(id); 
    } 
  }

  render(){
    if (this.props.companyprofile === 0) return null;
    console.log(this.props.singleProfile)
  return (
      <Grid container space={8}>
        <Grid item xs={4}>
        
          <Card>
          <Typography gutterBottom variant="headline" component="h1">
            Company Name
          </Typography>  
            <CardContent>
          <ListItem>{}</ListItem> 
          </CardContent>
          </Card>
          <Divider/>
          <Card>
          <Typography gutterBottom variant="headline" component="h1">
         
          </Typography>  
            <CardContent>
          <ListItem>{}</ListItem> 
          </CardContent>
          </Card>
        <Divider/>
        <Card className="card">
        <CardContent>
        <Typography gutterBottom variant="headline" component="h1">
          </Typography>  
         <List>
        <ListItem>{}</ListItem>  
       
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          </Typography>  
         <List>
        <ListItem>{}</ListItem>  
    
      </List>
        </CardContent>
        </Card>
        <Divider/>
        <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
           Benefits
          </Typography>  
         <List>
        <ListItem>{}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          Skills
          </Typography>  
         <List>
        <ListItem>{}</ListItem>
  
      </List>
        </CardContent>
        </Card>
        <Divider/>
        <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
 
          </Typography>  
         <List>
        <ListItem>{}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
     
          </Typography>  
         <List>
        <ListItem>{}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
      <Card className="card">
        <CardContent>
          <Typography gutterBottom variant="headline" component="h1">
          </Typography>  
         <List>
        <ListItem>{}</ListItem>  
        
      </List>
        </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
     
      </Grid>
      
      <Grid item xs={12}>
        <Card>

        <CardActions>
          <Button size="small" color="primary">Edit</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid  item xs={12}>
        <Card className="placeholder"> </Card>
      </Grid>
      </Grid>

    
  );
}
}

const mapStateToProps = (state) => {
  return {
    companyprofile: state.companydata.company|| []
    }
  }
const mapDispatchToProps = (dispatch) => {
      return {
        getSingleCompany: (id)=>dispatch(getSingleCompany(id))
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(ViewCompany);  