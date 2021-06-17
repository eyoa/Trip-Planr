import './Signup.scss';
import { Link } from 'react-router-dom';
import { Form, Button, Col } from 'react-bootstrap';

export const Signup = (props) => {
  const { signupForm, signupFormChangeHandler, submitSignupForm } = props;

  return (
    <Col className='signup-container'>
      <h1>Sign Up</h1>
      <br />
      <Form onSubmit={(e) => submitSignupForm(e)}>
        <Form.Group>
          <Form.Control
            placeholder='username'
            type='text'
            name='username'
            value={signupForm.username}
            onChange={(e) => signupFormChangeHandler(e)}
          />
          <br />
          <Form.Control
            placeholder='email'
            type='text'
            name='email'
            value={signupForm.email}
            onChange={(e) => signupFormChangeHandler(e)}
          />
          <br />
          <Form.Control
            placeholder='http://img.com'
            type='text'
            name='profile_url'
            value={signupForm.profile_url}
            onChange={(e) => signupFormChangeHandler(e)}
          />
          <br />
          <Form.Control
            placeholder='password'
            type='password'
            name='password'
            value={signupForm.password}
            onChange={(e) => signupFormChangeHandler(e)}
          />
          <br />
          <Form.Control
            placeholder='password confirmation'
            type='password'
            name='password_confirmation'
            value={signupForm.password_confirmation}
            onChange={(e) => signupFormChangeHandler(e)}
          />
          <br />
          <Button placeholder='submit' type='submit' variant='dark'>
            Sign Up
          </Button>
          <div>
            <Link to='/Login'>Cancel</Link>
          </div>
        </Form.Group>
      </Form>
    </Col>
  );
};
