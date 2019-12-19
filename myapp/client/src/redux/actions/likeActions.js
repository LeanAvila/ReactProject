import { ADD_LIKE, DELETE_LIKE, GET_LIKES} from './types';

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
  
  console.log(resp.likes, 'likes actualizado add');
  
  //actualizo mi estado de likes
  dispatch({
    type: ADD_LIKE,
    payload: resp.likes
  })
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
    console.log(resp.likes, 'likes actualizado delete');
  
    dispatch({
      type: DELETE_LIKE,
      payload: resp.likes
    })
}


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
    console.log(resp, 'todos los likes del usuario');
  
    dispatch({
      type: GET_LIKES,
      payload: resp.likes
    })
  
}