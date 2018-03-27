
import {combineReducers} from 'redux';  
import candidateReducer from './profileReducer/candidateReducer';
import singleCandidateReducer from './profileReducer/singleCandidateReducer'



const rootReducer =  combineReducers({
  profiles: candidateReducer, 
  singleProfile: singleCandidateReducer
})


export default rootReducer; 