import React, { Component } from 'react'
import {getOffers} from './../../action/offeraction'
import Table, { TableBody, TableCell, TableHead, TableRow, TablePagination,
    TableSortLabel,  TableFooter } from 'material-ui/Table';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux'
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import  Pagination from './../../services/pagination'
import JwPagination from 'jw-react-pagination';
import { Link } from 'react-router-dom';
import {FilterList} from 'material-ui-icons'
import IconButton from 'material-ui/IconButton';
import OfferList from './offerList'



 class Offeres extends Component {
  constructor(props){
    super(props); 
    this.state ={
        sorted: false,
        page: 0,
        rowsPerPage: 2,
    }   
    this.handleChangePage = this.handleChangePage.bind(this); 
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this); 
    this.sortOfferStatus = this.sortOfferStatus.bind(this); 

}
componentWillMount() {
    this.props.getOffers(); 
}

handleChangePage = (event, page) => {
    this.setState({page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };


  sortOfferStatus =() =>{
    if (this.props.offers.length === 0) return null;
   this.props.offers.sort((a,b) =>{return (a.offerstatus > b.offerstatus) ? 1 : ((b.offerstatus > a.offerstatus) ? -1 : 0);} );
   this.setState({
       ...this.state,
       sorted: !this.state.sorted,
   })
}


render() {
    if (this.props.offers.length === 0) return null;
      console.log(this.props.offers)
     // console.log(this.props.offers[0].candidate.account.firstname); 
     const emptyRows = this.state.rowsPerPage - Math.min
    (this.state.rowsPerPage, this.props.offers.length - this.state.page * this.state.rowsPerPage);


    const listOffer =() =>{
        return(
            <Paper className="root">
            <Table className="table">
                <TableHead>
                <TableRow>
                    <TableCell variant="head">Company Name</TableCell>
                    <TableCell variant="head"> Offer Status
                    <IconButton
                    onClick={this.sortOfferStatus }><FilterList/>
                    </IconButton>
                     </TableCell>
                    <TableCell variant="head">Candidate Name </TableCell>
                    </TableRow>
                 </TableHead>
                <TableBody>
                {
            
            this.props.offers.slice(this.state.page * this.state.rowsPerPage,
            this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((offer)=>{
                   return(
                   <OfferList
                   key={offer._id}
                   candidate = {offer.candidate.account.firstname}
                   offerstatus= {offer.offerstatus}
                   company = {offer.company.nameOfCompany}
                    />)
                })  
                }

                   {emptyRows > 0 && (
                    <TableRow style={{ height: 48 * emptyRows }}>
                    <TableCell colSpan={6} />
                    </TableRow>
          )}
          </TableBody>
          <TableFooter> 
          <TablePagination
              colSpan={3}
              count={this.props.offers.length}
              rowsPerPage={this.state.rowsPerPage}
              page={this.state.page}
              onChangePage={this.handleChangePage}
              onChangeRowsPerPage={this.handleChangeRowsPerPage}
              Actions={Pagination}
            />
          </TableFooter>
        </Table>
        </Paper>
            
        )
    }
    return (
        <Grid container spacing={8}> 
        {listOffer()}
      </Grid>
    );
}
}



const mapStateToProps = state => {
  return {
    offers: state.offers.offers|| []
    }
  }
const mapDispatchToProps = (dispatch) => {
      return {
         getOffers : () => dispatch(getOffers())
      }
  }

export default connect(mapStateToProps, mapDispatchToProps, null, {pure:false})(Offeres);  