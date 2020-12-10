import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar style={{background:'rgb(180, 225, 231)'}} expand="lg">
    <Navbar.Brand style={{fontFamily:'fantasy',color:'navy'}}>AutomatedLogic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavLink style={{color:'navy',textDecoration:'none',padding:'10px'}} to="/checklist">PreMigration</NavLink>
        <NavLink style={{color:'navy',textDecoration:'none',padding:'10px'}}  to="/questionnare">System Configuration</NavLink>
      </Nav>  
    </Navbar.Collapse>
  </Navbar>
  )
}
export default Header
