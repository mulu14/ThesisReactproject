
import userApi from './../readApi/userApi';

export function loadProfiles() {  
  return function(dispatch) {
    return userApi.getProfile().then(profile => {
      dispatch(loadProfileSuccess(profile));
    }).catch(error => {
      throw(error);
    });
  };
}