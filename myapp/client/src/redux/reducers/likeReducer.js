import { ADD_LIKE, DELETE_LIKE, GET_LIKES, ADD_LIKE_ERROR } from '../actions/types'

//estado inicial
const initialState={
    likes:[],
    flag:false
}

//reducer de likes
export default function (state = initialState, action) {

    switch (action.type){
        case ADD_LIKE:
            return {
                ...state,
                likes: action.payload,
                flag: true
            }
        case DELETE_LIKE: 
            return {
                ...state,
                likes: action.payload,
                flag:true
            }
        case GET_LIKES: 
            return {
                ...state,
                likes: action.payload,
                flag: true
            }
        case ADD_LIKE_ERROR: 
            return {
                ...state,
                error_auth: action.payload,
                flag: true
            }
        default: 
        return state
    }
    
}