import {REQUEST_COMPANY, RECEIVE_COMPANY,
    FETCH_SINGLE_COMPANY, 
    CREATE_NEW_COMPANY,
    UPDATE_COMPANY, DELETE_COMPANY} from './../../action/actionTypes'


    const reduceCompany = (state ={}, action) =>{
        switch (action.type) {
            case REQUEST_COMPANY:
              return {
                ...state,
                message: 'featching'
              };
            case RECEIVE_COMPANY:
              return {
                ...state,
                companies: action.companies.companies
              };
            case FETCH_SINGLE_COMPANY:
              return {
                ...state, 
               company: action.company.data
              };
            case CREATE_NEW_COMPANY:
              return {
                  ...state,
                  company: action.company
              };
            case UPDATE_COMPANY:
              return{
                  ...state,
                  companies: state.companies.map(company => company._id === action.newCompany._id ? company : action.newCompany)  
              }
            case DELETE_COMPANY:
              return {
                  ...state, 
                  companies: state.companies.filter(company => company._id !==action.data._id)
              }
            default:
              return state
          }

    }

    export default reduceCompany; 