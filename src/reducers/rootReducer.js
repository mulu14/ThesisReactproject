
import {combineReducers} from 'redux';  
import candidateReducer from './profileReducer/candidateReducer';
import singleCandidateReducer from './profileReducer/singleCandidateReducer'
import {routerReducer} from 'react-router-redux'
import {database } from './../utils/configfirebase/configFirebase'
import {reducer as FormReducer} from 'redux-form'
import {authentication} from './logreducer/loginReducer'



const rootReducer =  combineReducers({
  profiles: candidateReducer, 
  singleProfile: singleCandidateReducer, 
  router: routerReducer,
  form: FormReducer, 
  auth: authentication
})


export default rootReducer; 