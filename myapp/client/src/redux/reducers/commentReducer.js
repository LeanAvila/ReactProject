import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS } from '../actions/types'
//estado inicial
const initialState={
    favourites:[],
    flag:false
}

//reducer de favoritos
export default function (state = initialState, action) {

    switch (action.type){
        case ADD_COMMENT:
            return {
                ...state,
                favourites: action.payload,
                flag: true
            }
        case DELETE_COMMENT: 
            return {
                ...state,
                favourites: action.payload,
                flag:true
            }
        case GET_COMMENTS: 
            return {
                ...state,
                favourites: action.payload,
                flag: true
            }
        default: 
        return state
    }

}