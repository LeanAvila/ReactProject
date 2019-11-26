import { combineReducers } from 'redux';
import getCities from './reducer';
import getItinerary from './itineraryReducer'


export default combineReducers({
    cities: getCities,
    itinerary: getItinerary
})

