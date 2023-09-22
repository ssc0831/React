import React from "react"
import { Nav, Navbar, Container } from "react-bootstrap"
import '../App.css'



function Header(){
    return(
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><h1>Home</h1></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/todolist">ToDoList</Nav.Link>
            <Nav.Link href="/add">add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;