import { ADD_USER } from '../actions/types'



export const addUser = (data) => async (dispatch) => {
    console.log(data, 'info enviada al action del formulario')

    var myHeaders = new Headers();

    var myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               body: data,
               cache: 'default' };

    var urls = [
        "http://localhost:5000/users/register"
    ]
    
    var resp = await fetch(urls[0], myInit).
        then(res => res.json());
    console.log(resp);
    
    dispatch({ 
        type: ADD_USER,
        payload: resp
    })
}
