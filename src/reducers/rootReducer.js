
import {combineReducers} from 'redux';  
import candidateReducer from './profileReducer/candidateReducer';
import singleCandidateReducer from './profileReducer/singleCandidateReducer'
import {routerReducer} from 'react-router-redux'



const rootReducer =  combineReducers({
  profiles: candidateReducer, 
  singleProfile: singleCandidateReducer, 
  router: routerReducer
})


export default rootReducer; 