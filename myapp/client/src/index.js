import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import PageLogin from './pages/pageLogin'
import SignUp from './pages/signup'
import HomePage from './pages/homePage';
import Llamada from './Components/fetchCity'
import store from './redux/store'
const Routes =
        <div
       >
           <Router>
               <Switch>
                       <Route exact path="/" component={HomePage}/>
                       <Route exact path="/login" component={PageLogin}/>
                       <Route exact path="/signup" component={SignUp}/>
                       <Route exact path="/llamada" component={Llamada}/>
               </Switch>
           </Router>
       </div>

ReactDOM.render(Routes, document.getElementById('root'));
