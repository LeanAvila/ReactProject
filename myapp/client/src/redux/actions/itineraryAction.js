
import { GET_ITINERARY } from '../actions/types'

// export const getCities = () => async (dispatch) => {
//     var data = await fetch('http://localhost:5000/api/cities').then((resp) => resp.json())
//     dispatch({
//         type: GET_CITIES,
//         payload: data
//     })
// }

export const getItinerary = (id) => async (dispatch) => {
    var urls = [
        "http://localhost:5000/itineraries/" + id
    ]
    
    var resp = await fetch(urls[0]).
        then(res => res.json());
    console.log(resp);
    
    dispatch({ 
        type: GET_ITINERARY,
        payload: resp
    })
}
