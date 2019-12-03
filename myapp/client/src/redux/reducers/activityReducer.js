import { GET_ACTIVITIES } from '../actions/types'
const initialState={
    activities:[],
    flag:false
}
export default function (state =initialState, action) {

    switch (action.type){
        case GET_ACTIVITIES: 
        return {
            ...state,
            activities: action.payload,
            flag:true
        }

        default: 
        return state
    }

}