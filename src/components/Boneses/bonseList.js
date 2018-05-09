import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import List, { ListItem } from 'material-ui/List';
import Typography from 'material-ui/Typography';

const ListData = props => {
  return (
    <div>
      {
        <List>
          {props.bonses.map(item => {
            return <ListItem key={item._id}> {item.title} </ListItem>;
          })}
        </List>
      }
    </div>
  );
};
const ListBonses = props => {
  return (
    <div>
      {
        <Card>
          <CardContent>
            <Typography color="textSecondary">{props.name}</Typography>
            <ListData bonses={props.bonses} />
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default ListBonses;
