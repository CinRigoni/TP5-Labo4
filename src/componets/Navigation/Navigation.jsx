import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Musical Hendrix</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/location">Donde estamos</Nav.Link>
                <Nav.Link href="/list/">Productos</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;