// import {STRING_CONSTANTS} from '../../../utils/constant/';

const initialState = {
    loggedIn: localStorage.getItem('login') ? true : false
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'Login': {
            return { ...state }
        }
        case 'LoggedIn': {
            return { ...state, data: action.payload, loggedIn: true };
        }
        case 'Register': {
            return { ...state, data: action.payload, loggedIn: false };
        }
        case 'Error': {
            return { ...state, data: action.payload, error: true }
        }
        default:
            break;
    }

    return state;
}
