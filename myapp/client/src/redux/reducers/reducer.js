import { GET_CITIES, DELETE_CITY, ADD_CITY } from '../actions/types'

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

        default: 
        return state
    }

}