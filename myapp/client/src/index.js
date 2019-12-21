import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import Cities from './pages/cities/pageCities'
import SignUp from './pages/signup/signup'
import Login from './pages/login/login'
import HomePage from './pages/home/homePage';
import store from './redux/store'
import Itinerary from './pages/itineary/pageitinerary';
import NotFound from './pages/notFound/notFound';
const Routes =
        <Provider
        store = {store}
       >
           <Router>
               <Switch>
                       <Route exact path="/" component={HomePage}/>
                       <Route exact path="/login" component={Login}/>
                       <Route exact path="/signup" component={SignUp}/>
                       <Route exact path="/cities" component={Cities}/>
                       <Route exact path="/itinerary/:id" component={Itinerary}/>
                       <Route component={NotFound}/>
               </Switch>
           </Router>
       </Provider>

ReactDOM.render(Routes, document.getElementById('root'));
