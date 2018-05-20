import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  feachSingleCandidate,
  deleteCandidate
} from './../../action/candidateaction';
import List, { ListItem } from 'material-ui/List';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Displayskills from './display/Displayskills';
import BasicInfo from './display/BasicInfo';
import BenefitList from './display/Benefit';
import WorkExperiences from './display/WorkExperiences';
import SkillsList from './display/Skill';
import ProjectExperiences from './display/Projectexperiance';
import './style/view.css';
import ReactPerformance from 'react-performance';
class ViewCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (this.props.match.params) {
      const { id } = this.props.match.params;
      this.props.feachSingleCandidate(id);
    }
  }

  deleteCandidateAction = id => {
    deleteCandidate(id);
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.profiles.length !== nextProps.profiles.length) {
      return true;
    }

    return false;
  }

  render() {
    if (this.props.singleProfile.length === 0) return null;
    ReactPerformance.startRecording();
    ReactPerformance.printRecording();
    return (
      <Grid container space={8}>
        <Grid item xs={4}>
          <Card>
            <Typography gutterBottom variant="headline" component="h1">
              HeadLine
            </Typography>
            <CardContent>
              <ListItem>{this.props.singleProfile.headline}</ListItem>
            </CardContent>
          </Card>
          <Divider />
          <Card>
            <Typography gutterBottom variant="headline" component="h1">
              Expected Salary
            </Typography>
            <CardContent>
              <ListItem>{this.props.singleProfile.salary}</ListItem>
            </CardContent>
          </Card>
          <Divider />
          <BasicInfo basicInformation={this.props.singleProfile.account} />
        </Grid>

        <Grid item xs={4}>
          <Displayskills topskills={this.props.singleProfile.topSkills} />
          <Divider />
          <BenefitList benefits={this.props.singleProfile.benefits} />
        </Grid>
        <Grid item xs={4}>
          <SkillsList skills={this.props.singleProfile.skills} />

          <Divider />
          <WorkExperiences
            workexperiences={this.props.singleProfile.workExperiences}
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <ProjectExperiences
            projectExperiences={this.props.singleProfile.projectExperiences}
          />
        </Grid>
        <Grid item xs={4} />

        <Grid item xs={12}>
          <Card>
            <CardActions>
              <Button size="small" color="primary">
                <Link to={`/candidate/edit/${this.props.singleProfile._id}`}>
                  Edit
                </Link>
              </Button>
              <Button
                onClick={() =>
                  this.props.deleteCandidateAction(this.props.singleProfile._id)
                }
                size="small"
                color="secondary"
              >
                Delete
              </Button>
              <Button color="primary">
                <Link to="/offers"> Offer Page </Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card className="placeholder"> </Card>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    singleProfile: state.singleProfile.singleCandidate || [],
    profiles: state.profiles.candidates || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    feachSingleCandidate: id => dispatch(feachSingleCandidate(id)),
    deleteCandidateAction: id => dispatch(deleteCandidate(id))
  };
};

export default ReactPerformance.connect({
  mapStateToProps,
  mapDispatchToProps,
  getId: 'id_viewCadidate',
  Component: ViewCandidate
});
