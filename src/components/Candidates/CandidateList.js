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
                <TableCell> <Link to={`/candidate/view/${props.id}`}>{props.firstname}</Link></TableCell>
                <TableCell><Link to={`/candidate/view/${props.id}`}>{props.city}</Link></TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`}>{props.publishStatus[0].status}</Link></TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`}>{props.date}</Link></TableCell>
              </TableRow>
  );
}

export default  withRouter(CandidateList);



/*
 <TableCell><Link to={`/candidate/edit/${props.id}`} ><Button>{<Edit/>} </Button></Link></TableCell>
                <TableCell><Button onClick={() =>props.deleteCandidateAction(props.id)} size="small" color="primary"></Button>{<Add/>}</TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`} ><Button>{<ViewModule/>} </Button></Link></TableCell>
                <TableCell><Button onClick={() =>props.deleteCandidateAction(props.id)} size="small" color="secondary">{<Delete/>}</Button></TableCell>

*/