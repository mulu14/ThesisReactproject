import React from 'react'
import {TableCell,TableRow } from 'material-ui/Table';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const ListBonses =(props)=>{
    return(
        <div> 
                <List>
                  <ListItem>
                      {console.log(props.data)}
                </ListItem>
                </List>

        </div>

    )
}

export default ListBonses