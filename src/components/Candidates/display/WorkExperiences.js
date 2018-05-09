import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const ListData = props => {
  return (
    <div>
      {
        <List>
          {props.workexperiences.map(workexperience => {
            return (
              <ListItem key={workexperience._id}>
                {' '}
                {workexperience.experience}{' '}
              </ListItem>
            );
          })}
        </List>
      }
    </div>
  );
};
const WorkExperiences = props => {
  return (
    <div>
      {
        <Card>
          <CardContent>
            <Typography color="textSecondary" component="h1">
              Work Experiences
            </Typography>
            <ListData workexperiences={props.workexperiences} />
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default WorkExperiences;
