import { combineReducers } from 'redux';
import getCities from './reducer';


export default combineReducers({
    cities: getCities,
})

