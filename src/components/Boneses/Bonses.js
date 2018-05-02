import React, {Component}from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import {getCompanies} from './../../action/companyaction'
import { connect } from 'react-redux'
import  ListBonses from './bonseList'
import Table, { TableBody, TableCell, TableHead, TableRow, TablePagination,
    TableSortLabel,  TableFooter } from 'material-ui/Table';
import Paper from 'material-ui/Paper'



 class Bonses extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.filterbenifitList =  this.filterbenifitList.bind();
    }

    componentWillMount() {
        this.props.getCompanies(); 
    } 

    filterbenifitList =()=>{
        this.props.companies.map(company =>{
           // console.log(company.benefitsList.filter(data => data.code !== 0))
         })  
    }

    render(){
        if (this.props.companies.length === 0) return null;

       const filterData =  this.props.companies.map(company =>{
           return company.benefitsList.filter(data => data.code !== 0)
         })  

        filterData.map(item =>{
            item.map(i =>{
               //console.log(i.title); 
            })
        })

        const bonseList = () =>{
            return(
              <Card>
                  <CardContent>
                { this.props.companies.map(company =>{
                            return(
                            <ListBonses
                            key={company._id}
                            data={company.benefitsList.filter(data => data.code !== 0)}
                            /> 
                         )
                        })
                 }
                 </CardContent>
             </Card>

            )
          
        }
        return(
            <div className="root">
            <div  className="header"> </div>
            <div className="body">
              
               {bonseList()}
             </div>
            <div className="footer">
            <Card className="placeholder"> 
            </Card>
             </div>
        </div>
            
        )
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

 export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Bonses);  