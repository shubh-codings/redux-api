import { Container, Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Header() {
  const cart = useSelector(state=>state.cart);
  const count =  cart.length
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link to="/" as={Link}>Products</Nav.Link>
        </Nav>
        <Nav.Link to="/cart" as={Link}>Cart {count}</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;