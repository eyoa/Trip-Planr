import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <Navbar fixed='top' bg='light' expand='lg' className='flexColumn'>
      <Navbar.Brand>
        <b>Trip Planr</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic=navbar-nav'>
        <Nav className='mrAuto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/IdeasBoard'>
            Ideas
          </Nav.Link>
          <Nav.Link as={Link} to='/TripList'>
            My trips
          </Nav.Link>
          <Nav.Link>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
