
import { GET_CITIES} from '../actions/types'

// export const getCities = () => async (dispatch) => {
//     var data = await fetch('http://localhost:5000/api/cities').then((resp) => resp.json())
//     dispatch({
//         type: GET_CITIES,
//         payload: data
//     })
// }

export const getCities = () => async (dispatch) => {
    var urls = [
        "http://localhost:5000/cities/all"
    ]

    var resp = await fetch(urls[0]).
        then(res => res.json());
    console.log(resp);
    
    dispatch({ 
        type: GET_CITIES,
        payload: resp
    })
}
