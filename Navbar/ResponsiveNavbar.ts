import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const ResponsiveNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      	<Navbar.Brand href="#">Navbar</Navbar.Brand>    
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />   
		<Navbar.Collapse id="responsive-navbar-nav">      
		<Nav className="ms-auto">        
		<Nav.Link href="#">Link 1</Nav.Link>       
		<Nav.Link href="#">Link 2</Nav.Link>
		<Nav.Link href="#">Link 3</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  );
};

export default ResponsiveNavbar;