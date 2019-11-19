import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import rootReducer from '../redux/reducers/rootReducer';
import thunk from 'redux-thunk'



const store = createStore (rootReducer, undefined, composeWithDevTools(applyMiddleware(thunk)));

export default store; 