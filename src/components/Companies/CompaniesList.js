
import React,{Component} from 'react';
import { Link} from 'react-router-dom';
import List, { ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Footer from './../../footer/Footer'
import Divider from 'material-ui/Divider';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import './style/company.css'
import CreateCompany from './CreateCompany'


export default class CompaniesList extends Component {

    render() {
        return (
            <div id="wrapper">
	        	<div className="header">
                <Grid container spacing={8}>
                   
                </Grid>
             </div>
		   <div className="content">
           <Grid container spacing={8}> 
                <CreateCompany/>
            </Grid>
           </div>
		    <div>
            <Grid container spacing={8}>
            
            </Grid>
            </div>
	       </div>
        );
    }
}