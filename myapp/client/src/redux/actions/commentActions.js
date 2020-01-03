import { ADD_COMMENT, DELETE_COMMENT, GET_COMMENTS} from './types';

//<------------------------------ ADD COMMENT ------------------------------->
export const addComment = (itineraryId, content, token) => async (dispatch) =>{
  
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
  
  
  //actualizo mi estado de favoritos
  dispatch({
    type: ADD_COMMENT,
    payload: resp
  })
}


//<---------------------------------- DELETE FAVOURITE ---------------------------------->
export const deleteComment = (commentId, token) => async (dispatch) =>{

  //cabeceras
  var myInit = {
      method: 'POST',
      body: JSON.stringify({commentId}),
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      }
    };

    //url
    var urls = [`http://localhost:5000/comment/delete`];
  
    //fecth hacia el servidor
    let resp = await fetch(urls[0], myInit).then(res => {
      return res.json()
    });

    /* 
    resp : Array
    
    */
  
    dispatch({
      type: DELETE_COMMENT,
      payload: resp
    })
}

//<--------------------------------- GET COMMENTS ---------------------------------------->
export const getComments = (itineraryId) => async (dispatch) =>{

  var myInit = {
      method: 'POST',
      body: JSON.stringify({itineraryId}),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    var urls = [`http://localhost:5000/comment/all`];
  
    let resp = await fetch(urls[0], myInit).then(res => {
      return res.json()
    });
    /*
    resp: Array
    */
    dispatch({
      type: GET_COMMENTS,
      payload: resp
    })
  
}