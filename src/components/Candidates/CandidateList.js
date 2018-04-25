import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import {TableCell,TableRow } from 'material-ui/Table';







function CandidateList(props) {
  return (
              <TableRow key={props.id}>
                <TableCell> <Link to={`/candidate/view/${props.id}`}>{props.firstname}</Link></TableCell>
                <TableCell><Link to={`/candidate/view/${props.id}`}>{props.city}</Link></TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`}>{props.publishStatus[0].status}</Link></TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`}>{props.date}</Link></TableCell>
              </TableRow>
  );
}

export default  CandidateList;
//export default  withRouter(CandidateList);


/*
 <TableCell><Link to={`/candidate/edit/${props.id}`} ><Button>{<Edit/>} </Button></Link></TableCell>
                <TableCell><Button onClick={() =>props.deleteCandidateAction(props.id)} size="small" color="primary"></Button>{<Add/>}</TableCell>
                <TableCell> <Link to={`/candidate/view/${props.id}`} ><Button>{<ViewModule/>} </Button></Link></TableCell>
                <TableCell><Button onClick={() =>props.deleteCandidateAction(props.id)} size="small" color="secondary">{<Delete/>}</Button></TableCell>

*/