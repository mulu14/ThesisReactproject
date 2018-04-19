import {REQUEST_COMPANY, RECEIVE_COMPANY,
    FETCH_SINGLE_COMPANY, 
    CREATE_NEW_COMPANY,
    UPDATE_COMPANY, DELETE_COMPANY, DELETE_CANDIDATE} from './../../action/actionTypes'


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
                  companies: state.companies.map(company => company.id === action.newCompany.id ? company : action.newCompany)  
              }
            case DELETE_CANDIDATE:
              return {
                  ...state, 
                  companies: state.companies.filter(company => company.id !==action.data.id)
              }
            default:
              return state
          }

    }

    export default reduceCompany; 