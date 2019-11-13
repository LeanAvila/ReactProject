import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools  } from 'redux-devtools-extension';
import rootReducer from '../redux/reducers/rootReducer';
import thunk from 'redux-thunk'


const middleware = [thunk];

const store = createStore (rootReducer, undefined, composeWithDevTools(applyMiddleware(...middleware)));

export default store; 