import React from 'react'
import { TableCell,TableRow } from 'material-ui/Table'



const OfferList =(props) =>{
    return(
        <TableRow> 
         <TableCell>{props.company} </TableCell>
         <TableCell>{props.converNumberTostatus(props.offerstatus)} </TableCell>
         <TableCell> {props.candidate}</TableCell>
         <TableCell> {props.createdDate}</TableCell>
        </TableRow>
        

    )

}

export default OfferList; 
