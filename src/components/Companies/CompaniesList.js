import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import List, { ListItem } from 'material-ui/List';
import Button from 'material-ui/Button';
import { TableCell, TableRow } from 'material-ui/Table';
import { withRouter } from 'react-router-dom';
import { Delete, Add, Edit, ViewModule } from 'material-ui-icons';

function CompaniesList(props) {
  return (
    <TableRow>
      <TableCell>
        <Link to={`/company/view/${props.id}`}>{props.companyname}</Link>
      </TableCell>
      <TableCell>
        <Link to={`/company/view/${props.id}`}>
          {props.convertNumbertoStatus(props.publishedStatus)}
        </Link>
      </TableCell>
      <TableCell>
        <Link to={`/company/view/${props.id}`}>{props.createdDate}</Link>
      </TableCell>
    </TableRow>
  );
}
export default withRouter(CompaniesList);
