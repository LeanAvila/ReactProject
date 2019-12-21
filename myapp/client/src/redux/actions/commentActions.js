import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS} from './types';

//<------------------------------ ADD COMMENT ------------------------------->
export const addComment = (itineraryId, content, token) => async (dispatch) =>{
  console.log(itineraryId, token, 'info llegada al action');
  

  //cabeceras
  var myInit = {
      method: 'POST',
      body: JSON.stringify({itineraryId, content}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    };
  
  //url
  var urls = [`http://localhost:5000/comment/add`];
  

  //fetch hacia el servidor
  let resp = await fetch(urls[0], myInit).then(res => {
    //la respuesta me retorna todos los datos de mi usuario con el favoritos actualizado
    return res.json()
  });
  
  console.log(resp.comments, 'favoritos actualizado add');
  
  //actualizo mi estado de favoritos
  dispatch({
    type: ADD_COMMENT,
    payload: resp.comments
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
      comments : Array
    }
    
    */
    console.log(resp.comments, 'favoritos actualizado delete');
  
    dispatch({
      type: DELETE_COMMENT,
      payload: resp.comments
    })
}


export const getcomments = (token) => async (dispatch) =>{

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
      comments: Array
    }
    */
    console.log(resp, 'todos los favoritos del usuario');
  
    dispatch({
      type: GET_COMMENTS,
      payload: resp.comments
    })
  
}