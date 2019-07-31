// import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import reducer from './reducers/index';

// const middleware = [thunk, createLogger()];

// export default createStore(reducer, applyMiddleware(...middleware));

import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;