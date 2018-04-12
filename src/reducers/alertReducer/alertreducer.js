
import {ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR} from './../../action/actionTypes'



export function alert(state = {}, action) {
    switch (action.type) {
      case ALERT_SUCCESS:
        return {
         ...state,
          message: action.message
        };
      case ALERT_ERROR:
        return {
          ...state,
          message: action.message
        };
      case  ALERT_CLEAR :
        return {
        };
      default:
        return state
    }
  }