import React from 'react';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

const stylesMedia = {
  height: 194
};

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { expanded: false };
  }

  render() {
    return (
      <div className="profileUser">
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>

              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>

              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>

              <CardContent> </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>

              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>

              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>

              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card style={stylesMedia}>
              <CardHeader> </CardHeader>
              <CardContent> </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
