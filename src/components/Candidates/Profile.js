
import React from 'react';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorderIcon from 'material-ui-icons/StarBorder';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';



const stylesMedia ={
    height: 194,
}

export default class  Profile extends React.Component {
  constructor(props){
    super(props)

  this.state = { expanded: false };
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

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
         <CardMedia  style={stylesMedia}> </CardMedia>
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