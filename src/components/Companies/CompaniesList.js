import React from 'react';
import { Link } from 'react-router-dom';
import { TableCell, TableRow } from 'material-ui/Table';
import { withRouter } from 'react-router-dom';

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
