import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
                <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
                <Nav.Link as ={HashLink} to="/explore">Explore</Nav.Link>
                <Nav.Link as={HashLink} to="/home#blogs">Blogs</Nav.Link>
                <Nav.Link as ={HashLink} to="/home#products">Products</Nav.Link>
                <Nav.Link as ={HashLink} to="/home#reviews">Reviews</Nav.Link>
                <Nav.Link as ={HashLink} to="/addaproduct">Add Product</Nav.Link>
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