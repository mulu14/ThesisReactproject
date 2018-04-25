import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT }  from  './../../action/actionTypes'




export function authentication(state = {}, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
          ...state,
          loggingIn: false,
          user: action.user.message
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loggedIn: true,
          user: action.user.id, 
          token: action.user.token
        };
      case LOGIN_FAILURE:
        return {
          ...state, 
          error: action.error
        };
      case LOGOUT:
        return {};
      default:
        return state
    }
  }
