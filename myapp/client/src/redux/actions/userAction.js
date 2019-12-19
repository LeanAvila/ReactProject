import { ADD_USER, LOG_OUT_USER, LOGIN_USER, GET_USER_ACTIVE, GET_FAVOURITES} from '../actions/types';


//<--------------------------------- ADD USER ---------------------------------->
export const addUser = data => async dispatch => {
  /* 
  data : {
    userName: String,
    firstname : String,
    lastName : String, 
    password : String,
    email: String,
    TermsAndConditions: Boolean,
    country: String,
  }
  */

  //cabeceras para realizar mi fetch
  var myInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //url
  var urls = ['http://localhost:5000/user/register'];

  //fetch hacia el servidor
  let resp = await fetch(urls[0], myInit).then(res => {
    //la respuesta retorna el token nuevo para el usuario
    return res.json()
  });

  /*
  resp : {
    token: String
  }
  */

  dispatch({
    type: ADD_USER,
    payload: resp
  })

  //despues de hacer el dispatch ( guardar el token en el estado redux), 
  //entonces redirecciona el home con el token, para guardarlo en el localStorage
  if (resp.token){
    window.location.href = `http://localhost:3000/home/?token=${resp.token}`;
  }
};


//<------------------------------- LOGIN USER ----------------------------------->
export const login = data => async dispatch => {
  /*
  data: {
    userName : String,
    password: String,
  }

  */

  //cabeceras
  var myInit = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  //url
  var urls = ['http://localhost:5000/user/login'];

  //fetch realizado al servidor
  var resp = await fetch(urls[0], myInit).then(res => {
    //la respuesta retorna el token del usuario logeado
    return res.json()});


  dispatch({
    type: LOGIN_USER,
    payload: resp
  });

  //despues de hacer el dispatch ( guardar el token en el estado redux), 
  //entonces redirecciona el home con el token, para guardarlo en el localStorage
  if (resp.token){
    window.location.href = `http://localhost:3000/home/?token=${resp.token}`
  }
  
};


//<---------------------------------- GET USER ACTIVE --------------------------------------->
export const getUserActive = (token) => async (dispatch) => {

  //cabeceras
  var options = {
    method: 'POST',
    headers : {
      'Content-Type' : 'Application/json',
      'Authorization' : `bearer ${token}`
    }
  }


  var user = await fetch ('http://localhost:5000/user/auth', options).then(resp => {
    //mi pagina necesita saber si el usuario esta logeado cada refresh de pagina, entonces me responde con los datos del usuario del JWT
    return resp.json()
  })

  /*
  user : {
    _id : ObjectId,
    userName : String,
    lastName : String,
    firstName : String,
    password : String (cifrada con bcrypt),
    country : String
  }
  */

  //retiro la password al momento de enviar la info a mi pagina
  var {password , ...sinPassword} = user

  //actualizo mi estado de redux
  dispatch ({
    type: GET_USER_ACTIVE,
    payload: sinPassword
  })
}