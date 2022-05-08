import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className='header-container' variant="dark">
                <Container>
                    <Navbar.Brand className='header-title' href="#home">Car Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>

                            <Nav.Link as={Link} to='/'>
                                Home
                            </Nav.Link>
                            {
                                user && <Nav.Link as={Link} to='/manageItems'>
                                    Manage Items
                                </Nav.Link>
                            }
                            {
                                user && <Nav.Link as={Link} to='/myItem'>
                                    My Item
                                </Nav.Link>
                            }
                            {
                                user && <Nav.Link as={Link} to='/addItem'>
                                    Add Item
                                </Nav.Link>
                            }
                            <Nav.Link as={Link} to='/blogs'>
                                Blogs
                            </Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignout} >Logout </button>
                                    :
                                    <Nav.Link as={Link} to='/login'>
                                        Login
                                    </Nav.Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;