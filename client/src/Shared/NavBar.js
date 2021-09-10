import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {useSelector} from 'react-redux'
const NavBar = () => {
    const loginUser = useSelector(state => state.userLogin)
    const {loading,error,userInfo} = loginUser

    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>Shopping</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                            {userInfo ? (<p>Bienvenu Zakaria</p>) : 
                               <>
                               <LinkContainer to='/cart'>
                               <Nav.Link to='/cart'>Cart</Nav.Link>
                           </LinkContainer>
                           <LinkContainer to='/login'>
                               <Nav.Link href="/login">Sign in</Nav.Link>
                           </LinkContainer>
                           </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar