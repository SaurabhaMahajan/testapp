import React from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import history from '../history';
import store from '../redux/store';
import MainContainer from './Container Component/MainContainer'

function App(props) {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register/" component={Register} />
                    <Route path="/home/" component={Home} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </Provider>
    )
}


function NoMatch({ location }) {
    return (
        <MainContainer>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </MainContainer>
    );
}

export default App;

