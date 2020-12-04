import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <div className="container-fluid">
        <div id="margin_space" className="row">
          <div className="col-md-12">
          <MDBNavbar expand="md">
        <MDBNavbarBrand>
           <MDBNavLink id="nav_link" to="/"><img  src="images/compasstransparentblue (1)logo.svg" alt="Compass"/></MDBNavLink> 
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink  exact activeClassName="menu_main_active" to="/About">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink  to="#!">Who’s CP?</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink exact activeClassName="menu_main_active" to="/FAQs">FAQs</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink exact activeClassName="menu_main_active" to="/Contact">Learn</MDBNavLink>
            </MDBNavItem>
            
      
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBNavLink to="#!"><button className="sign_in">Sign in</button></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavLink to="#!"><button className="sign_up">Sign up for free</button></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
          </div>
          
        </div>
      </div>
    );
  }
}

export default NavbarPage;
