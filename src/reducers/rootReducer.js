
import {combineReducers} from 'redux';  
import profileReducer from './profileReducer/profileReducer';



const rootReducer =  combineReducers({
  profile: profileReducer
})

export default rootReducer; 