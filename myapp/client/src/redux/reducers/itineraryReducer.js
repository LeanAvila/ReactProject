import { GET_ITINERARY } from '../actions/types'

export default function (state = [], action) {

    switch (action.type){
        case GET_ITINERARY: 
        return state.push(...action.payload)

        default: 
        return state
    }

}