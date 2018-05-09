import React, { Component } from 'react';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import './invitation.css';

export default class Invitations extends Component {
  render() {
    return (
      <div className="root">
        <div className="header"> </div>
        <div className="body">
          <Card className="placeholder"> </Card>
        </div>

        <div className="footer"> </div>
      </div>
    );
  }
}
