import { GET_ITINERARY } from '../actions/types'
const initialState={
    itineraries:[],
    flag:false
}
export default function (state = initialState, action) {

    switch (action.type){
        case GET_ITINERARY: 
        return {
            ...state,
            itineraries: action.payload,
            flag: true
        }

        default: 
        return state
    }

}