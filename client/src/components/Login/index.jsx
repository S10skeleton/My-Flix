import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Define the login mutation here, outside of the handleFormSubmit
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Existing form validation logic
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    try {
      // Execute the login mutation
      const { data } = await login({ variables: { ...userFormData } });

      // Check if the login was successful and the token exists
      if (data.loginUser && data.loginUser.token) {
        Auth.login(data.loginUser.token);
        console.log("Logged in successfully!");  // Add this line for confirmation
      } else {
        // Handle case where login is unsuccessful
        throw new Error('Login failed');
      }
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({ email: '', password: '' });
  };

  const handleGuestLogin = () => {
    // Redirect to the home page for guest login
    navigate('/home');
  };

  return (
    <>
      <div className='loginForm'>
        <h2>Login</h2> {/* Header added here */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group className='mb-3'>
            <Form.Label htmlFor='email'>Email</Form.Label>
            <Form.Control
              type='text'
              placeholder='Your email'
              name='email'
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label htmlFor='password'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Your password'
              name='password'
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />
            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type='submit'
            variant='success'>
            Login
          </Button>
        </Form>
        <Button
          onClick={handleGuestLogin}
          variant='secondary'
          className='mt-3'>
          Guest/Demo Login
        </Button>
        <p className='disclaimer'>Playback unavailable in Demo</p>
      </div>
    </>
  );
};

export default LoginForm;
