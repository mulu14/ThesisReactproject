
import userApi from './../readApi/userApi';

export function loadProfiles() {  
  return function(dispatch) {
    return userApi.getAllProfile().then(profiles => {
      dispatch(loadUserSuccess(profiles));
    }).catch(error => {
      throw(error);
    });
  };
}