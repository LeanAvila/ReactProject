import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './login'
import SignUp from './signup'
import HomePage from './homePage';
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
                            <Route exact path="/login" component={Login}/>
                            <Route exact path="/signup" component={SignUp}/>
                    </Switch>
                </Router>
                
            </div>
        )
    }
}

export default Routes;