import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import '../App.css'



function Header(){
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><h1>Movie</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/poster">Poster</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;