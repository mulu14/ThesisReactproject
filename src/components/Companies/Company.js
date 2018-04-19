
import React,{Component} from 'react';
import {getCompanies} from './../../action/companyaction'
import { connect } from 'react-redux'
import CompaniesList from './CompaniesList'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

class Company extends Component {
    constructor(props){
        super(props); 
        this.state ={

        }    
    }
    componentWillMount() {
        this.props.getCompanies(); 
    }

    render() {
        if (this.props.companies.length === 0) return null;
        console.log(this.props.companies); 
        const listCompany =() =>{
            return(
                <Paper className="root">
                <Table className="table">
                    <TableHead>
                    <TableRow><TableCell variant="head">CompanyList</TableCell></TableRow>
                     </TableHead>
                    <TableBody>
                    {
            
                    this.props.companies.map((company)=>{
                       return(
                       <CompaniesList
                       id={company._id}
                       companyname = {company.nameOfCompany}
                        />)
                    })  
                    }
              </TableBody>
            </Table>
            </Paper>
                
            )
        }
        return (
            <Grid container spacing={8}> 
            {listCompany()}  
          </Grid>
        );
    }
}



const mapStateToProps = state => {
    return {
        companies: state.companydata.companies || []
      }
    }
const mapDispatchToProps = (dispatch) => {
        return {
           getCompanies : () =>dispatch(getCompanies())
        }
    }

 export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Company);  

