import React, { Component } from "react";
import 'bootstrap//dist/css/bootstrap.css'
import '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

class NavBar extends Component {

render() {
  return (
        /*<!------------------ NavBar --------------------!>*/
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

            {/*<!------------------ Icon Avatar with DropDown --------------------!>*/}
            <a className="text-muted mr-3" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img  className="rounded-circle" src="https://picsum.photos/30/30" alt=""/>
            </a>
            <div className="dropdown-menu rounded ml-2" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/signup"className="dropdown-item">Create account</Link>
              <Link to="/login"className="dropdown-item">Log In</Link> 
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

export default NavBar;