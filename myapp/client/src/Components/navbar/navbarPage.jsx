import React, { Component } from "react";
import 'bootstrap//dist/css/bootstrap.css'
import { connect } from 'react-redux'
import {PropTypes} from 'prop-types'
import { Link } from 'react-router-dom'
import { getUserActive } from '../../redux/actions/userAction'
import queryString from 'query-string';




class NavBar extends Component {
constructor(props){
  super(props)

  this.state = {
    user : {},
    token : ""
  }

}

async componentDidMount(){
  let params = queryString.parse(this.props.location.search)
  let localStoreToken = localStorage.getItem('token');


  if (localStoreToken){
    
    this.setState({
      token: localStoreToken
    })

    await this.props.getUserActive(localStoreToken);
  }else if (params){
    //si existen parametros pregunto si existe token
      if (params.token){
        //si existe token en la url entonces lo guardo en el localStorage
        localStorage.setItem('token', params.token)

        this.setState({
          token: params.token
        })

        //realizo el fetch para pedir los datos del usuario (para cargarlos en el navbar)
        await this.props.getUserActive(params.token);
      }
  }
}

render() {
  
  console.log(this.props.item.user, 'props')
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

      {/*<!------------------ Icon Avatar with DropDown --------------------!>*/}
      <a className="text-muted mr-3" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {this.props.item.user.avatarPicture? 
        <img  className="rounded-circle" src={this.props.item.user.avatarPicture} style={{height: '35px'},{width: '35px'}} alt=""/>
        :
        
        // <img  className="rounded-circle" src={avatar} style={{height: '35px'},{width: '35px'}} alt=""/>
        <i className="fas fa-user-circle fa-2x"/>
        }
        
      </a>
        {/* <-------------------- Nombre del usuario logeado -------------------->*/}
        {this.props.item.user.firstName ? 
        <div>
          <h5 className="text-white">{this.props.item.user.firstName}  {this.props.item.user.lastName}</h5>
        </div>
        :
        null
        }
      <div className="dropdown-menu rounded ml-2" aria-labelledby="navbarDropdownMenuLink">
        {this.props.item.user.email ? 
        <a href="http://localhost:3000/home" onClick={()=> localStorage.removeItem('token')} className="dropdown-item">Log Out</a> 
        :
        <div>
          <Link to="/signup"className="dropdown-item">Create account</Link>
          <Link to="/login"className="dropdown-item">Log In</Link> 
        </div>
        
        }
      </div>

      {/*<!------------------ Nav Toggler --------------------!>*/}
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon m-1"></span>
      </button>

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