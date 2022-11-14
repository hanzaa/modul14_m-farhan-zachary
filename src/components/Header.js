import {Button,Container,Form,Nav,Navbar} from "react-bootstrap" 
import { Link } from "react-router-dom"

function Header(){
    return(
        <div>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#">Netlab Bookstore</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/promo" disabled>Promo</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Input ISBN13"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    ) 
}

export default Header;