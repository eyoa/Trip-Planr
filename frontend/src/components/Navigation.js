import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Navigation = (props) => {
  const { userState, handleLogout } = props;
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
          {userState.isLoggedIn ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <Nav.Link as={Link} to='/Login'>
              Login
            </Nav.Link>
          )}
          <Nav>
            {userState.isLoggedIn && userState.user ? (
              // <div>{userState.user.username}</div>
              //userState.user.profile_url
              <img
                src={userState.user.profile_url}
                alt='Avatar'
                className='avatar'
              ></img>
            ) : (
              <></>
            )}
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
