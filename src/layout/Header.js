import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{background:'rgb(7, 73, 214)',boxShadow: '1px 1px 2px 2px rgb(15, 15, 139)'}} fixed="top" expand="lg">
    <Navbar.Brand style={{fontFamily:'fantasy',color:'lightblue'}}>AutomatedLogic</Navbar.Brand>
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
