
import { GET_ACTIVITIES } from '../actions/types'

export const getActivities = (id) => async (dispatch) => {
    var urls = [
        "http://localhost:5000/activities/" + id
    ]

    var resp = await fetch(urls[0]).
        then(res => res.json());
    console.log(resp);
    
    dispatch({ 
        type: GET_ACTIVITIES,
        payload: resp
    })
}
