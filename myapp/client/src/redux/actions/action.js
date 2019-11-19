
import { GET_CITIES, ADD_CITY, DELETE_CITY } from '../actions/types'

const defaultState = async () => {return await fetch('http://localhost:5000/api/cities')
.then((resp) => {console.log(resp.json)})
.catch((error) => console.log(error))
}
var result = defaultState();

export const getCities = () => {
    console.log(result)
    return {
        type: GET_CITIES,
        payload: {
            data: result            
        }
    }
}
