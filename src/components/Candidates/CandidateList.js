import React from 'react';
import List,{ ListItem} from 'material-ui/List';
import Button from 'material-ui/Button';
import './profile.css'
import {TableCell,TableRow } from 'material-ui/Table';


function CandidateList(props) {
  return (
              <TableRow>
                <TableCell>{props.title}</TableCell>
                <TableCell><Button onClick={props.editCandiadte}>Edit</Button></TableCell>
                <TableCell><Button onClick={props.editCandiadte}>Add</Button></TableCell>
                <TableCell><Button onClick={props.editCandiadte}>View</Button></TableCell>
                <TableCell><Button onClick={props.editCandiadte}>Deactivate</Button></TableCell>
              </TableRow>
  );
}

export default CandidateList;


