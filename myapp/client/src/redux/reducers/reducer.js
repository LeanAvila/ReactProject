import { GET_CITIES, GET_CITY, ADD_CITY } from '../actions/types'

const initialState={
    cities:[],
    flag:false
}

export default function (state = [], action) {

    switch (action.type){
        case GET_CITIES: 
        return {
            ...state,
            cities: action.payload,
            flag: true
        }
        case GET_CITY:
            return {
                ...state,
                city: action.payload,
                flag:true
            }

        default: 
        return state
    }

}