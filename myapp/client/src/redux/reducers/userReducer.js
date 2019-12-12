import { ADD_USER, LOGIN_USER } from '../actions/types'
const initialState={
    user:{},
    flag:false
}
export default function (state = initialState, action) {

    switch (action.type){
        case ADD_USER: 
            return {
                ...state,
                user: action.payload,
                flag: true
            }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                flag: true
            }
        default: 
        return state
    }

}