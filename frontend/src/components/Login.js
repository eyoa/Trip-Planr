import './Login.scss';
import { Link } from 'react-router-dom';

export const Login = (props) => {
  const { loginForm, handleFormChange, submitLoginForm } = props;

  return (
    <div>
      <h1>Log In</h1>
      <form onSubmit={(e) => submitLoginForm(e)}>
        <input
          placeholder='username'
          type='text'
          name='username'
          value={loginForm.username}
          onChange={(e) => handleFormChange(e)}
        />
        <input
          placeholder='email'
          type='text'
          name='email'
          value={loginForm.email}
          onChange={(e) => handleFormChange(e)}
        />
        <input
          placeholder='password'
          type='password'
          name='password'
          value={loginForm.password}
          onChange={(e) => handleFormChange(e)}
        />
        <button placeholder='submit' type='submit'>
          Log In
        </button>
        <div>
          <Link to='/Signup'>Signup</Link>
        </div>
      </form>
    </div>
  );
};
