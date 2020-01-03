import React, { Component } from "react";
import 'bootstrap//dist/css/bootstrap.css'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
import { getUserActive } from '../../redux/actions/userAction'
import queryString from 'query-string';
import './styles.css'



class NavBar extends Component {
constructor(props){
  super(props)
  
}

async componentDidMount(){
  /*
  "this.props.location" la recibo desde las propiedades, porque dado que este es un componente, no tiene una ruta predefinida en el App.js (en mi caso el index.js)
  es por eso que cada vez que agrego el componente en una pagina nueva, le paso como propiedad "this.props.location" (ver en ../../pages)
  si esto no se hace, cuando llamas a this.props.location.search, te tira undefined
  */
  let params = queryString.parse(this.props.location.search)
  //
  /*
  search es un metodo que busca si hay query en mi URL (localhost:5000/?token=12345), pero devuelve un String
  ese String lo convierto en un objeto a traves de "queryString.parse()"

  params = {
    token: Valor
  }

  */
  let localStorageToken = localStorage.getItem('token');

  if (params){

    //si existen parametros pregunto si existe token (esto porque en mi ruta "localhost:3000/signup" tambien recibo parametros por URL, esto es para evitar problemas)
      if (params.token){

        //si existe token en la url entonces lo guardo en el localStorage
        localStorage.setItem('token', params.token);

        //realizo el fetch para pedir los datos del usuario (para cargarlos en el navbar)
        await this.props.getUserActive(params.token);
      }
  }else if (localStorageToken){
    //si existe llamo a la funcion "getUserActive(token)" que me va a actualizar mi estado de redux con los datos del usuario logueado
    await this.props.getUserActive(localStorageToken);
    //mas abajo especifico que me trae "this.props.item" (estado de mi usuario logueado)
  }
}

/*
this.props.item = {
  user : {
    userName : String,
    firstName : String,
    lastName : String,
    avatarPicture : String,
    country : String,
    favourites: Array,
    likes : Array,
    
  }
}
*/

render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-none border-bottom fixed-top">

      {/*<!--------------------------------- ICON AVATAR CONNECT WITH DROPDOWN  ------------------------------!>*/}

      <a className="text-muted mr-3 mt-1" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

        {/* Consulto si el usuario esta logueado (lo que significa que en mi estado de redux tengo que tener los datos del usuario) */}
        {this.props.item.user.avatarPicture? 
        <img  className="rounded-circle" src={this.props.item.user.avatarPicture} style={{height: '40px'},{width: '40px'}} alt=""/>
        :
        <i className="fas fa-user-circle fa-2x text-dark"/>
        }
        
      </a>

      {/*<- /ICON AVATAR ->*/}

      {/* <----------------------------------- NOMBRE DE USUARIO LOGUEADO ------------------------------------->*/}

        {this.props.item.user.firstName ? 
        <div className="mr-3 mt-2">
          <h5 className="text-dark">{this.props.item.user.firstName}  {this.props.item.user.lastName}</h5>
        </div>
        :
        null
        }

      {/*<- /NOMBRE DE USAURIO LOGUEADO -> */}
      

      {/*<-------------------------------------------- DROPDOWN -----------------------------------------------> */}

      <div className="dropdown-menu rounded ml-2" aria-labelledby="navbarDropdownMenuLink">
        {this.props.item.user.email ? 
        <a href="http://localhost:3000/" onClick={()=> localStorage.removeItem('token')} className="dropdown-item">Log Out</a> 
        :
        <div>
          <Link to="/signup"className="dropdown-item">Create account</Link>
          <Link to="/login"className="dropdown-item">Log In</Link> 
        </div>
        
        }
      </div>

      {/*<- /DROPDOWN -> */}


      {/*<!------------------------------------------ NAV TOGGLER ----------------------------------------------!>*/}

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon m-1"></span>
      </button>
      
      {/* ITEMS FROM NAV TOGGLER */}
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">

          <li className="nav-item active">
            <a className="nav-link" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Features</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>

        </ul>
      </div>

      {/*<- /NAV TOGGLER ->*/}
    </nav>
    );
  }
}


NavBar.propTypes = {
  getUserActive : PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  item: state.user
})

export default connect(mapStateToProps, {getUserActive})(NavBar);