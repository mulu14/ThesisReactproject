
import {combineReducers} from 'redux';  
import profileReducer from './profileReducer/profileReducer';



const rootReducer =  combineReducers({
  profiles: profileReducer
})


export default rootReducer; 