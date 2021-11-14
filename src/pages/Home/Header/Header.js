import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import "./Header.css"
const Header = () => {
    const {user,logOut}=useAuth()
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
                
              
                {
                
                    user?.email?  <div>
                    <Nav.Link as ={HashLink} to="/dashboard">DashBoard</Nav.Link>
                    </div>:
                    <Nav.Link as ={HashLink} to="/login">Login</Nav.Link>
                }
                </Nav>
                <Navbar.Text>
                    Hi: <a href="#login">{user.displayName}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;