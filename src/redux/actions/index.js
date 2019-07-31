import axios from 'axios';
import { CONFIG_CONSTANTS } from '../../constants/configConstants';

axios.defaults.headers.common['Authorization'] = ' Bearer ' + localStorage.getItem('token');

const register = (data, callback) => {
    return (dispatch) => {
        axios.post(CONFIG_CONSTANTS.BASE_URL + '/users', {
            "email": data.email,
            "password": data.password
        })
            .then((res) => {
                dispatch({
                    type: 'Register',
                    payload: res,
                });
                callback()
            })
            .catch((err, res) => {
                dispatch({
                    type: 'Error',
                    payload: err.response.data
                });
            });
    };
}
const login = (formdata, callback) => {
    return dispatch => {
        let data = {
            "email": formdata.email,
            "password": formdata.password
        }
        axios.post(CONFIG_CONSTANTS.BASE_URL + '/login',
            data)
            .then((res) => {
                localStorage.setItem("login", "login");
                axios.defaults.headers.common['Authorization'] = ' Bearer ' + localStorage.getItem('token');
                dispatch({
                    type: 'LoggedIn',
                    payload: formdata,
                });
                callback();
            })
            .catch((err) => {
                dispatch({
                    type: 'Error',
                    payload: err.response.data
                });
            });
    };
}

export {
    register, login
}