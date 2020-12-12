import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="info"  fixed="top" expand="lg">
    <Navbar.Brand style={{fontFamily:'fantasy',color:'rgb(173,224,254)'}}>AutomatedLogic</Navbar.Brand>
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


// style={{background:'rgb(237,253,253)',boxShadow: '1px 1px 2px 2px rgb(170, 224, 224)'}}

// rgb(173,224,254)