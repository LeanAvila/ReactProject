import React, { Component } from "react";
import 'bootstrap//dist/css/bootstrap.css'
import '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { MDBNavbar, MDBNavbarBrand, NavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer }
from 'mdbreact';
class NavBar extends Component {
  state = {
    collapseID: ''
  }
  
  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

render() {
  return (

      <MDBNavbar color="white" className="shadow-none" light>
          <MDBContainer>
            <MDBNavbarBrand>
                <MDBDropdown>
                  <MDBDropdownToggle color="white" className="shadow-none">
                    <i className="fas fa-user-circle fa-2x"></i>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu color="danger">
                    <MDBDropdownItem><Link to="/login">Log In</Link></MDBDropdownItem>
                    <MDBDropdownItem><Link to="/signup">Create Account</Link></MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown> 
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse1')} />
            <MDBCollapse id="navbarCollapse1" isOpen={this.state.collapseID} navbar>
              <NavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink to="#!">Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Link</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">Profile</MDBNavLink>
                </MDBNavItem>
              </NavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
    );
  }
}

export default NavBar;