import { GET_CITIES, GET_CITY} from '../actions/types'


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

export const getCity = (id) => async (dispatch) => {
    var urls = [
        "http://localhost:5000/cities/" + id
    ]

    var resp = await fetch(urls[0])
        .then(res => res.json())
    console.log(resp)

    dispatch({
        type: GET_CITY,
        payload: resp
    })
}
