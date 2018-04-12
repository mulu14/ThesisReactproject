 
 import {USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS,  USERS_REGISTER_FAILURE} from './../../action/actionTypes'



export function users(state = {}, action) {
    switch (action.type) {
      case USERS_REGISTER_REQUEST:
        return {
            ...state,
          loading: true
        };
      case  USERS_REGISTER_SUCCESS:
        return {
            ...state,
          user: action.user
        };
      case  USERS_REGISTER_FAILURE:
        return {
            ...state,
          error: action.error
        };
      default:
        return state
    }
  }
  