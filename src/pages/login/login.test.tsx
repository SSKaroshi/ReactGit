import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './login-page';
//import axios from 'axios';

describe('LoginPage component', () => {
  test('renders login form correctly', () => {
    const { getByLabelText, getByText } = render(<LoginPage />);
    
    // Assert that all necessary elements are rendered
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
    expect(getByText(/sign in/i)).toBeInTheDocument();
    expect(getByText(/forgot password/i)).toBeInTheDocument();
  });

 
  test('shows error message when login fails', async () => {
    // Mock axios.post to simulate a failed login attempt

     /*
    jest.spyOn(window.axios, 'post').mockRejectedValueOnce({
      response: {
        status: 403,
      },
    });
    */

    const { getByLabelText, getByText, findByText } = render(<LoginPage />);

    // Enter invalid credentials
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'invalid@example.com' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'invalidPassword' } });
    fireEvent.click(getByText(/sign in/i));

    // Wait for the error message to appear
    const errorMessage = await findByText(/user not found or incorrect password/i);
    expect(errorMessage).toBeInTheDocument();
  });

  // test('navigates to forgot password page when forgot password link is clicked', () => {
  //   const { getByText, history } = render(<LoginPage />);
  //   fireEvent.click(getByText(/forgot password/i));
  //   expect(history.location.pathname).toBe('/forgotpasswordpage');
  // });

  // Add more test cases as needed
});


/*
import React from 'react'

const loginTest = () => {
  return (
    <div>login-test</div>
  )
}

export default loginTest
*/