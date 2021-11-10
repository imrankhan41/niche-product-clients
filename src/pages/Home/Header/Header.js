import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Header.css"
const Header = () => {
    return (
        <div>
            <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-danger" >
            <Container>
                <Navbar.Brand href="#home" className="img-logo">CycleShop</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Nav className="fs-5">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/explore">Explore</Nav.Link>
                <Nav.Link href="#pricing">Explore</Nav.Link>
                </Nav>
                <Navbar.Text>
                    Hi: <a href="#login">Mark Otto</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;