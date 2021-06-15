import './Signup.scss';
import { Link } from 'react-router-dom';

export const Signup = (props) => {
  const { signupForm, signupFormChangeHandler, submitSignupForm } = props;

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={(e) => submitSignupForm(e)}>
        <input
          placeholder='username'
          type='text'
          name='username'
          value={signupForm.username}
          onChange={(e) => signupFormChangeHandler(e)}
        />
        <input
          placeholder='email'
          type='text'
          name='email'
          value={signupForm.email}
          onChange={(e) => signupFormChangeHandler(e)}
        />
        <input
          placeholder='http://img.com'
          type='text'
          name='profile_url'
          value={signupForm.profile_url}
          onChange={(e) => signupFormChangeHandler(e)}
        />
        <input
          placeholder='password'
          type='password'
          name='password'
          value={signupForm.password}
          onChange={(e) => signupFormChangeHandler(e)}
        />
        <input
          placeholder='password confirmation'
          type='password'
          name='password_confirmation'
          value={signupForm.password_confirmation}
          onChange={(e) => signupFormChangeHandler(e)}
        />

        <button placeholder='submit' type='submit'>
          Sign Up
        </button>
        <div>
          <Link to='/Login'>cancel</Link>
        </div>
      </form>
    </div>
  );
};
