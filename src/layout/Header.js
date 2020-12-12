import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    // <Navbar bg="info"  fixed="top" expand="lg">
    <Navbar bg="light"  fixed="top" expand="lg">
    <Navbar.Brand style={{fontFamily:'Impact, Haettenschweiler',color:'rgb(168, 8, 8)'}}>AutomatedLogic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink className="headerLink" to="/checklist">Migration Plan and CheckList</NavLink>
        <NavLink className="headerLink" to="/questionnare">System Cloud Migration Configuration</NavLink>
      </Nav>  
    </Navbar.Collapse>
  </Navbar>
  )
}
export default Header

//  <Navbar.Brand style={{fontFamily:'Impact, Haettenschweiler',color:'rgb(173,224,254)'}}>AutomatedLogic</Navbar.Brand>
