import React from 'react';
import List, { ListItem } from 'material-ui/List';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const BasicInfo = props => {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h1">
          Basic Information
        </Typography>
        <List>
          <ListItem>{props.basicInformation.name} </ListItem>
          <ListItem>{props.basicInformation.lastname} </ListItem>
          <ListItem>{props.basicInformation.email} </ListItem>
          <ListItem>{props.basicInformation.phone}</ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
export default BasicInfo;
