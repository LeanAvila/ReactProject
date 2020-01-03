import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS } from '../actions/types'

//estado inicial
const initialState={
    comments:[],
    flag:false
}

//reducer de favoritos
export default function (state = initialState, action) {

    switch (action.type){
        case ADD_COMMENT:
            return {
                ...state,
                comments: action.payload,
                flag: true
            }
        case DELETE_COMMENT: 
            return {
                ...state,
                comments: action.payload,
                flag:true
            }
        case GET_COMMENTS: 
            return {
                ...state,
                comments: action.payload,
                flag: true
            }
        default: 
        return state
    }

}