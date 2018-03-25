import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
};

const CandidateDetail = (props) => {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Profile
          </Typography>

          
         <List>
        <ListItem>Account</ListItem>  
        <ListItem>Educations</ListItem>  
        <ListItem> Work Experiences</ListItem>  
        <ListItem> Project Experiences </ListItem>   
        <ListItem> Top Skills </ListItem>  
        <ListItem>Benefits</ListItem> 
      </List>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
           View 
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

  //account= {this.props.profile.account}
                // topSkills = {this.props.profile.topSkills}
                // skills = {this.props.profile.skills}
                // benefits = {this.props.profile.benefits}
                // publishInfo = {this.props.profile.publishInfo}
                // workExperiences = {this.props.profile.workExperiences}
                // projectExperiences = {this.props.profile.projectExperiences}
                // educations = {this.props.profile.educations}

CandidateDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CandidateDetail);