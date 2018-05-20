import React, { Component } from 'react';
import { getSingleOffer } from './../../action/offeraction';
import List, { ListItem } from 'material-ui/List';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import ReactPerformance from 'react-performance';

class ViewOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (this.props.match.params) {
      const { id } = this.props.match.params;
      this.props.getSingleOffer(id);
    }
  }

  render() {
    if (this.props.singleOffer === 0) return null;
    ReactPerformance.startRecording();
    ReactPerformance.printRecording();
    return (
      <Grid container space={8}>
        <Grid item xs={4}>
          <Card>
            <Typography gutterBottom variant="headline" component="h1">
              Company Name
            </Typography>
            <CardContent>
              <ListItem />
            </CardContent>
          </Card>
          <Divider />
          <Card>
            <Typography gutterBottom variant="headline" component="h1" />
            <CardContent>
              <ListItem>{}</ListItem>
            </CardContent>
          </Card>
          <Divider />
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1">
                Candidate
              </Typography>
              <List>
                <ListItem />
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1" />
              <List>
                <ListItem>{}</ListItem>
              </List>
            </CardContent>
          </Card>
          <Divider />
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1">
                Number of Employees
              </Typography>
              <List>
                <ListItem />
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1">
                Benefits Offers
              </Typography>
              <List>
                <ListItem>{}</ListItem>
              </List>
            </CardContent>
          </Card>
          <Divider />
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1" />
              <List>
                <ListItem>{}</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1" />
              <List>
                <ListItem>{}</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className="card">
            <CardContent>
              <Typography gutterBottom variant="headline" component="h1" />
              <List>
                <ListItem>{}</ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4} />

        <Grid item xs={12}>
          <Card>
            <CardActions>
              <Button size="small" color="primary">
                Edit
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
    sinleOffer: state.offers.singleOffer || []
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getSingleOffer: id => dispatch(getSingleOffer(id))
  };
};

export default ReactPerformance.connect({
  mapStateToProps,
  mapDispatchToProps,
  getId: 'id_Offerview',
  Component: ViewOffer
});
