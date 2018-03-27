import React from 'react';
import List,{ ListItem} from 'material-ui/List';
import Grid from 'material-ui/Grid';
import Profile from './Profile';
import Button from 'material-ui/Button';
import './profile.css'


const CandidateList =(props) =>{
    return(
   <Grid>
    <ul className="listDandidate"> 
        <li>{props.title}</li>
        <li className="editAddCandidate"><Button onClick={props.editCandiadte}>Edit</Button></li>
        <li className="editAddCandidate"><Button onClick={props.editCandiadte}>Add</Button></li>
        <li className="editAddCandidate"><Button onClick={props.editCandiadte}>View</Button></li>
    </ul>
    </Grid>
 
    )
}

 export default CandidateList; 