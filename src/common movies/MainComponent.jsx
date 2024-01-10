import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { MdOndemandVideo } from "react-icons/md";
import { Link } from 'react-router-dom';

const MainComponent = () => {
  return (
    <div>
        <Navbar className="head" bg="info" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home"><MdOndemandVideo style={{fontSize:"40px"}} /> Movie App</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="#popular"><Link style={{textDecoration:'none', color: 'white'}} to={'/popular'}>Popualr Movies</Link></Nav.Link>
        <Nav.Link href="#latest"><Link style={{textDecoration:'none', color: 'white'}} to={'/latest'}>Latest Movies</Link></Nav.Link>
        <Nav.Link href="#comedy"><Link style={{textDecoration:'none', color: 'white'}} to={'/comedy'}>Comedy Movies</Link></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default MainComponent