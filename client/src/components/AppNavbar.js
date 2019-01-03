import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
      super(props);
  
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true
      };
    }
  
    toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
    render() {
      return (
        
          <Navbar color="white" light sticky='top'>
            <NavLink to='/' style={{color:'black'}}> <NavbarBrand className="mr-auto">BOURBIER</NavbarBrand> </NavLink>
            
            <Nav className="ml-auto">
              <NavLink to='/' style={{color:'black'}}>
                <FaShoppingCart />
              </NavLink>
            </Nav>

              <NavbarToggler onClick={this.toggleNavbar} style={{marginLeft:'2%'}}/>
            
              <Collapse isOpen={!this.state.collapsed} navbar sticky='top'>
                <Nav navbar className="float-right">
                  <NavItem>
                    <NavLink to="/" style={{color:'black'}}>Inscription / Connexion</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/products" style={{color:'black'}}>Produits</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>

            </Navbar>

      );
    }
  }

export default AppNavbar;