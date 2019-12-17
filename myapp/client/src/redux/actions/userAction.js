import { ADD_USER, LOG_OUT_USER, LOGIN_USER, GET_USER_ACTIVE} from '../actions/types';

export const addUser = data => async dispatch => {
  console.log(data, 'info enviada al action del formulario addUser');

  var myInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  var urls = ['http://localhost:5000/user/register'];

  let resp = await fetch(urls[0], myInit).then(res => {
    console.log(res.cookies, 'cookie')
    return res.json()
  });
  console.log(resp, 'adduser');

  if (resp.token){
    window.location.href = `http://localhost:3000/home/${resp.token}`;
  }
};

export const login = data => async dispatch => {
  console.log(data, 'info enviada al action del formulario login');

  var myInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  var urls = ['http://localhost:5000/user/login'];

  var resp = await fetch(urls[0], myInit).then(res => {
    return res.json()});
  // if (resp.ok){
  //   window.location.href = 'http://localhost:3000/home';
  // }
  console.log(resp);

  dispatch({
    type: LOGIN_USER,
    payload: resp
  });
};

export const getUserActive = (token) => async (dispatch) => {
    console.log(token, "token recibido en el action")

    var options = {
      method: 'POST',
      headers : {
        'Content-Type' : 'Application/json',
        'Authorization' : `bearer ${token}`
      }
    }


    var user = await fetch ('http://localhost:5000/user/auth', options).then(resp => resp.json())
    console.log(user, 'usuario ')
      var {password , ...sinPassword} = user

    console.log(sinPassword, 'usuario sin constraseña')

    dispatch ({
      type: GET_USER_ACTIVE,
      payload: sinPassword
    })
}


export const logOut = (dispatch) => {
  
  dispatch ({
    type: LOG_OUT_USER,
    payload: null
  })
}