import { ADD_LIKE, DELETE_LIKE, GET_LIKES } from '../actions/types'

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
        default: 
        return state
    }
    
}