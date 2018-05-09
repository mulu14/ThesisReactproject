import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import Footer from './../../footer/Footer';
import Divider from 'material-ui/Divider';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card';

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
            <Card>
              <CardHeader> </CardHeader>
              <CardMedia style={stylesMedia}> </CardMedia>
              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader> </CardHeader>
              <CardMedia style={stylesMedia}> </CardMedia>
              <CardContent> </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardHeader> </CardHeader>
              <CardMedia style={stylesMedia}> </CardMedia>
              <CardContent> </CardContent>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card>
              <Card>
                <CardHeader> </CardHeader>
                <CardMedia style={stylesMedia}> </CardMedia>
                <CardContent> </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Card>
                <CardHeader> </CardHeader>
                <CardMedia style={stylesMedia}> </CardMedia>
                <CardContent> </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Card>
                <CardHeader> </CardHeader>
                <CardMedia style={stylesMedia}> </CardMedia>
                <CardContent> </CardContent>
              </Card>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Card>
                <CardHeader> </CardHeader>
                <CardMedia style={stylesMedia}> </CardMedia>
                <CardContent> </CardContent>
              </Card>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
