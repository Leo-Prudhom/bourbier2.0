import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

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
        <div>
          <Navbar color="fade" light>
            <NavbarBrand className="mr-auto">BOURBIER</NavbarBrand> 

              <NavbarToggler onClick={this.toggleNavbar} className="ml-auto" />

              <Nav style={{marginLeft:"2%"}}>
                <NavItem>
                  Basket
                </NavItem>
              </Nav>
            
              <Collapse isOpen={!this.state.collapsed} navbar >
                <Nav navbar>
                  <NavItem>
                    <NavLink to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/items">Items</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>

            </Navbar>
        </div>
      );
    }
  }

export default AppNavbar;