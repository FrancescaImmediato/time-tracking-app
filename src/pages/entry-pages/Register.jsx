import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import epochLogo from '../../assets/epochLogo.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Checks if the email is valid
  const emailTest = /\S+@\S+\.\S+/.test(email);

  // Checks if the passwords match
  const passwordTest = password === confirmPassword;

  // Handles input changes and saves it to state
  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordTest && emailTest) {
      console.log('Registered!');
    } else {
      console.log('Passwords do not match or email is invalid');
    }
  };

  return (
    
    <div className="hero is-fullheight">
    
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title is-4 has-text-centered">Register</h1>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleChange(setEmail)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">First Name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleChange(setFirstName)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleChange(setLastName)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange(setPassword)}
                      />
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
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button className="button is-primary is-fullwidth" type="submit">
                        Create Account
                      </button>
                      <Link to="/Login" className="button is-primary is-fullwidth is-outlined">
                        Return to Login
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
}
