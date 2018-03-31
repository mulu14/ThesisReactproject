import React from 'react';
import { Link } from 'react-router-dom';
import List,{ ListItem} from 'material-ui/List';
import Button from 'material-ui/Button';
import './style/profile.css'
import {TableCell,TableRow } from 'material-ui/Table';
import { withRouter } from 'react-router-dom'




function CandidateList(props) {
  return (
              <TableRow>
                <TableCell>{props.title}</TableCell>
                <TableCell><Link to={`/candidate/edit/${props.id}`} ><Button> Edit </Button></Link></TableCell>
                <TableCell><Button>Add</Button></TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`} ><Button> View </Button></Link></TableCell>
                <TableCell><Button onClick={props.handleClick}>Delete</Button></TableCell>
              </TableRow>
  );
}

export default  withRouter(CandidateList);


