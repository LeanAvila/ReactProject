import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PageLogin from './pageLogin'
import SignUp from './signup'
import HomePage from './homePage';
import Llamada from '../Components/fetchCity'
class Routes extends React.Component {
    constructor () {
        super () 
    }

    render () {
        return (
            <div>
                <Router>
                    <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route exact path="/login" component={PageLogin}/>
                            <Route exact path="/signup" component={SignUp}/>
                            <Route exact path="/llamada" component={Llamada}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Routes;