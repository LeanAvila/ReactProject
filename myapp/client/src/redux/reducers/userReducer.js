import { ADD_USER, LOGIN_USER, GET_USER_ACTIVE, LOG_OUT_USER } from '../actions/types'
const initialState={
    user:{},
    flag:false
}
export default function (state = initialState, action) {

    switch (action.type){
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                flag: true
            }
        case ADD_USER: 
            return {
                ...state,
                user: action.payload,
                flag:true
            }
        case GET_USER_ACTIVE: 
            return {
                ...state,
                user: action.payload,
                flag: true
            }
        case LOG_OUT_USER:
            return {
                ...state,
                user: action.payload,
                flag: true
            }
        default: 
        return state
    }

}