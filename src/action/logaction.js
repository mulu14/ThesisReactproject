import { request,  success, failure } from './createAction/createloginaction'



const URL = 'http://www.sample-website.com';

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));
        return  fetch(URL, {
                method: 'post',
                body: JSON.stringify({username: username, password: password})
            })
            .then(
                user => {
                    dispatch(success(user));
                    localStorage.setItem('user', res.data.token);
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };
}

