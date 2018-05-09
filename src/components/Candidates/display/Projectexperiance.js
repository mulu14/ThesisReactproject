import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const ListData = props => {
  return (
    <div>
      {
        <List>
          {props.projectExperiences.map(projectExperience => {
            return (
              <ListItem key={projectExperience._id}>
                {' '}
                {projectExperience.title}{' '}
              </ListItem>
            );
          })}
        </List>
      }
    </div>
  );
};
const ProjectExperiences = props => {
  return (
    <div>
      {
        <Card>
          <CardContent>
            <Typography color="textSecondary" component="h1">
              Project Experiance
            </Typography>
            <ListData projectExperiences={props.projectExperiences} />
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default ProjectExperiences;
