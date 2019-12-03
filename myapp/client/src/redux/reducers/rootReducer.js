import { combineReducers } from 'redux';
import getCities from './reducer';
import getItinerary from './itineraryReducer'
import getActivities from './activityReducer'

export default combineReducers({
    cities: getCities,
    itinerary: getItinerary,
    activities: getActivities
})

