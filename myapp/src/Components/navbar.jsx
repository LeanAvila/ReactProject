import React, { Component } from "react";
import 'bootstrap//dist/css/bootstrap.css'
import '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
class NavBar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <nav className="navbar navbar-light bg-light">
        <i className="fas fa-user-circle"></i>
      </nav>
    );
  }
}

export default NavBar;