import React from 'react';
import Carrito from './CartWidget';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavScrollExample() {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="cobayos">Cobayos</Nav.Link>
                        <Nav.Link href="alimentos">Alimento</Nav.Link>
                        <Nav.Link href="contacto">Contacto</Nav.Link>
                        <Nav.Link href="/cart"><Carrito /></Nav.Link>
                        

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



