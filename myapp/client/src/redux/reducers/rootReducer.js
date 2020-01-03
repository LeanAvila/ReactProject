import { combineReducers } from 'redux';
import cities from './reducer';
import itinerary from './itineraryReducer'
import activities from './activityReducer'
import user from './userReducer'
import favourites from './favouriteReducer'
import likes from './likeReducer'
import comments from './commentReducer'

export default combineReducers({
    cities,
    itinerary,
    activities,
    user,
    favourites,
    likes,
    comments
})

