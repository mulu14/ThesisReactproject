import React from 'react';
import { Link } from 'react-router-dom';
import List,{ ListItem} from 'material-ui/List';
import Button from 'material-ui/Button';
import './style/profile.css'
import {TableCell,TableRow } from 'material-ui/Table';
import { withRouter } from 'react-router-dom'
import {Delete, Add, Edit, ViewModule} from 'material-ui-icons'





function CandidateList(props) {
  return (
              <TableRow>
                <TableCell>{props.title}</TableCell>
                <TableCell><Link to={`/candidate/edit/${props.id}`} ><Button>{<Edit/>} </Button></Link></TableCell>
                <TableCell><Button onClick={() =>props.deleteCandidateAction(props.id)}></Button>{<Add/>}</TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`} ><Button>{<ViewModule/>} </Button></Link></TableCell>
                <TableCell><Button onClick={() =>props.deleteCandidateAction(props.id)}>{<Delete/>}</Button></TableCell>
              </TableRow>
  );
}

export default  withRouter(CandidateList);


