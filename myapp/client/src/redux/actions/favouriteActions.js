import { ADD_FAVOURITE, DELETE_FAVOURITE, GET_FAVOURITES} from './types';

//<------------------------------ ADD FAVOURITES ------------------------------->
export const addFavourite = (itineraryId, token) => async (dispatch) =>{

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
  var urls = [`http://localhost:5000/favourite/add`];
  

  //fetch hacia el servidor
  let resp = await fetch(urls[0], myInit).then(res => {
    //la respuesta me retorna todos los datos de mi usuario con el favoritos actualizado
    return res.json()
  });
  
  //actualizo mi estado de favoritos
  dispatch({
    type: ADD_FAVOURITE,
    payload: resp.favourites
  })
}


//<---------------------------------- DELETE FAVOURITE ---------------------------------->
export const deleteFavourite = (itineraryId, token) => async (dispatch) =>{

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
    var urls = [`http://localhost:5000/favourite/delete`];
  
    //fecth hacia el servidor
    let resp = await fetch(urls[0], myInit).then(res => {
      return res.json()
    });

    /* 
    resp : {
      favourites : Array
    }
    
    */
    dispatch({
      type: DELETE_FAVOURITE,
      payload: resp.favourites
    })
}


//<------------------------------------ GET FAVOURITES ------------------------------------->
export const getFavourites = (token) => async (dispatch) =>{

  var myInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    };
  
    var urls = [`http://localhost:5000/favourite/all`];
  
    let resp = await fetch(urls[0], myInit).then(res => {
      return res.json()
    });
    /*
    resp: {
      favourites: Array
    }
    */
  
    dispatch({
      type: GET_FAVOURITES,
      payload: resp.favourites
    })
  
}