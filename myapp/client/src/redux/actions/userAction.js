import { ADD_USER, LOGIN_USER } from '../actions/types'



export const addUser = (data) => async (dispatch) => {
    console.log(data, 'info enviada al action del formulario addUser')

    var myInit = {  method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                      }
                };

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

export const login = (data) => async (dispatch) => {
    console.log(data, 'info enviada al action del formulario login')

    var myInit = {  method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                      }
                };

    var urls = [
        "http://localhost:5000/users/login"
    ]
    
    var resp = await fetch(urls[0], myInit).
        then(res => res.json());
    console.log(resp);
    
    dispatch({ 
        type: LOGIN_USER,
        payload: resp
    })
}
