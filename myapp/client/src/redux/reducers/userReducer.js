import { GET_ITINERARY } from '../actions/types'
const initialState={
    user:{},
    flag:false
}
export default function (state = initialState, action) {

    switch (action.type){
        case GET_ITINERARY: 
        return {
            ...state,
            user: action.payload,
            flag: true
        }

        default: 
        return state
    }

}