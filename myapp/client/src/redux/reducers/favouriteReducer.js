import { ADD_FAVOURITE, DELETE_FAVOURITE, GET_FAVOURITES } from '../actions/types'
//estado inicial
const initialState={
    favourites:[],
    flag:false
}

//reducer de favoritos
export default function (state = initialState, action) {

    switch (action.type){
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: action.payload,
                flag: true
            }
        case DELETE_FAVOURITE: 
            return {
                ...state,
                favourites: action.payload,
                flag:true
            }
        case GET_FAVOURITES: 
            return {
                ...state,
                favourites: action.payload,
                flag: true
            }
        default: 
        return state
    }

}