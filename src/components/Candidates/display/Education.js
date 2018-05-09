import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const ListData = props => {
  return (
    <div>
      {
        <List>
          {props.educations.map(education => {
            return <ListItem key={education._id}> {eduaction.title} </ListItem>;
          })}
        </List>
      }
    </div>
  );
};
const EduactionList = props => {
  return (
    <div>
      {
        <Card>
          <CardContent>
            <Typography color="textSecondary" component="h1">
              Eduaction
            </Typography>
            <ListData educations={props.educations} />
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default EducationList;
