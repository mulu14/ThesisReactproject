
import React,{Component} from 'react';
import Grid from 'material-ui/Grid';
import CreateCompany from './CreateCompany'
import { Link } from 'react-router-dom';
import List,{ ListItem} from 'material-ui/List';
import Button from 'material-ui/Button';
import {TableCell,TableRow } from 'material-ui/Table';
import { withRouter } from 'react-router-dom'
import {Delete, Add, Edit, ViewModule} from 'material-ui-icons'


function CompaniesList(props){

        return (
            <TableRow>
            <TableCell>{props.companyname}</TableCell>
            <TableCell><Link to="" ><Button>{<Edit/>} </Button></Link></TableCell>
            <TableCell><Button size="small" color="primary"></Button>{<Add/>}</TableCell>
            <TableCell> <Link to={`/company/view/${props.id}`} ><Button>{<ViewModule/>} </Button></Link></TableCell>
            <TableCell><Button size="small" color="secondary">{<Delete/>}</Button></TableCell>
          </TableRow>
            
        );
}
export default withRouter(CompaniesList); 
