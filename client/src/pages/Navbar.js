import React from 'react';
import {NavLink} from 'react-router-dom'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export default function navabar() {
    return (
        <Navbar className="navColor" variant="dark">
        <Navbar.Brand to="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link  href="/">Home</Nav.Link>
        </Nav>
      </Navbar>
    )
}