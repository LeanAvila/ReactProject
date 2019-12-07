import React, { Component } from "react";
import 'bootstrap//dist/css/bootstrap.css'
import '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

class NavBar extends Component {

render() {
  return (
        /*<!------------------ NavBar --------------------!>*/
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-none">

            {/*<!------------------ Icon Avatar with DropDown --------------------!>*/}
            <a class=" text-muted" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-user-circle fa-3x m-4"></i>
            </a>
            <div class="dropdown-menu rounded ml-2" aria-labelledby="navbarDropdownMenuLink">
              <Link to="/signup"class="dropdown-item">Create account</Link>
              <Link to="/login"class="dropdown-item">Log In</Link> 
            </div>

            {/*<!------------------ Nav Toggler --------------------!>*/}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon m-3"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>

        </nav>
    );
  }
}

export default NavBar;