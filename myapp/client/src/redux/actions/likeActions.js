import { ADD_LIKE, DELETE_LIKE, GET_LIKES, ADD_LIKE_ERROR} from './types';

//<------------------------------ ADD LIKE ------------------------------->
export const addLike = (itineraryId, token) => async (dispatch) =>{

  //cabeceras
  var myInit = {
      method: 'POST',
      body: JSON.stringify({itineraryId}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    };
  
  //url
  var urls = [`http://localhost:5000/like/add`];
  

  //fetch hacia el servidor
  let resp = await fetch(urls[0], myInit).then(res => {
    //la respuesta me retorna todos los datos de mi usuario con los likes actualizado
    return res.json()
  });
  
  console.log(resp, 'respuesta de likes')

  if (resp.error_auth){
    console.log(resp.error_auth, 'error de auth')
    dispatch({
      type: ADD_LIKE_ERROR,
      payload: resp.error_auth
    })
  }else {
    dispatch({
      type: ADD_LIKE,
      payload: resp.likes
    })
  }
  //actualizo mi estado de likes
  
}


//<---------------------------------- DELETE LIKE ---------------------------------->
export const deleteLike = (itineraryId, token) => async (dispatch) =>{

  //cabeceras
  var myInit = {
      method: 'POST',
      body: JSON.stringify({itineraryId}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    };

    //url
    var urls = [`http://localhost:5000/like/delete`];
  
    //fecth hacia el servidor
    let resp = await fetch(urls[0], myInit).then(res => {
      return res.json()
    });

    /* 
    resp : {
      likes : Array
    }
    
    */
  
    dispatch({
      type: DELETE_LIKE,
      payload: resp.likes
    })
}

//<-------------------------------- GET LIKES ---------------------------------------->
export const getLikes = (token) => async (dispatch) =>{

  var myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    };
  
    var urls = [`http://localhost:5000/like/all`];
  
    let resp = await fetch(urls[0], myInit).then(res => {
      return res.json()
    });
    /*
    resp: {
      likes: Array
    }
    */
    dispatch({
      type: GET_LIKES,
      payload: resp.likes
    })
  
}