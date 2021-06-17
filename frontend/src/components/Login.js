import './Login.scss';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';

export const Login = (props) => {
  const { loginForm, handleFormChange, submitLoginForm } = props;

  return (
    <Row className='justify-content-md-center'>
      <Col className='login-container'>
        <h1>Log In</h1>
        <br />
        <Form onSubmit={(e) => submitLoginForm(e)}>
          <Form.Group>
            <Form.Control
              placeholder='username'
              type='text'
              name='username'
              value={loginForm.username}
              onChange={(e) => handleFormChange(e)}
            />
            <br />
            <Form.Control
              placeholder='email'
              type='text'
              name='email'
              value={loginForm.email}
              onChange={(e) => handleFormChange(e)}
            />
            <br />
            <Form.Control
              placeholder='password'
              type='password'
              name='password'
              value={loginForm.password}
              onChange={(e) => handleFormChange(e)}
            />
            <br />
            <Button placeholder='submit' type='submit' variant='dark'>
              Log In
            </Button>
            <div>
              <Link to='/Signup'>Signup</Link>
            </div>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};
