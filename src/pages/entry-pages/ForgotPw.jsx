
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // 1 = email input, 2 = code input, 3 = new password
  const [message, setMessage] = useState(''); // Message to display

  // Checks if the email is valid
  const emailTest = /\S+@\S+\.\S+/.test(email);
  // Checks if the passwords match
  const passwordTest = newPassword === confirmPassword;

  // Handles input changes and saves it to state
  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  // Handles form submission for email input
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (emailTest) {
      console.log('Code sent to:', email);
      setStep(2); // Move to code input step
      setMessage(''); // Clear any previous message
    } else {
      setMessage('Please enter a valid email address');
    }
  };

  // Handles form submission for code input
  const handleCodeSubmit = (e) => {
    e.preventDefault();
    if (code === '1234') { // Replace with your code validation logic
      console.log('Code is correct');
      setStep(3); // Move to new password step
      setMessage(''); // Clear any previous message
    } else {
      setMessage('Invalid code');
    }
  };

  // Handles form submission for new password
  const handleNewPasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordTest) {
      setMessage('New password set');
      // Redirect to a different page or perform any other necessary actions
    } else {
      setMessage('Passwords do not match');
    }
  };

  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title is-4 has-text-centered">Password Reset</h1>
                {message && (
                  <div className="notification is-danger">
                    {message}
                  </div>
                )}
                {step === 1 && (
                  <form onSubmit={handleEmailSubmit}>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={handleChange(setEmail)}
                        />
                      </div>
                    </div>

                    <div className='buttons'> 
                    <div className=git "button is-primary is-fullwidth" type="submit">Send Code</div>
                    <Link to="/Login" className="button is-primary is-fullwidth is-outlined">Return to Login</Link>
                    </div>

                  </form>
                )}
                {step === 2 && (
                  <form onSubmit={handleCodeSubmit}>
                    <div className="field">
                      <label className="label">Enter Code</label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="text"
                          placeholder="Code"
                          value={code}
                          onChange={handleChange(setCode)}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button className="button is-primary is-fullwidth" type="submit">
                          Verify Code
                        </button>
                      </div>
                    </div>
                  </form>
                )}
                {step === 3 && (
                  <form onSubmit={handleNewPasswordSubmit}>
                    <div className="field">
                      <label className="label">New Password</label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="password"
                          placeholder="New Password"
                          value={newPassword}
                          onChange={handleChange(setNewPassword)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Confirm Password</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${passwordTest ? '' : 'is-danger'}`}
                          type="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={handleChange(setConfirmPassword)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button className="button is-primary is-fullwidth" type="submit">
                          Change Password
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}