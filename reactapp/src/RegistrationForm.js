// src/RegistrationForm.js
import React, { Component } from 'react';

class RegistrationForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      submitted: false,
      errorMessage: '', // Add a state for error message
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;

    // Check if any field is missing
    if (!username || !email || !password) {
      this.setState({ errorMessage: 'Please fill in all fields.' });
      return; // Exit the function to prevent further processing
    }

    // You can perform further actions here, e.g., send data to a server.
    console.log('Submitted data:', { username, email, password });
    
    // Update the state to indicate that the form has been submitted
    this.setState({ submitted: true, errorMessage: '' }); // Clear any previous error message
  };

  render() {
    const { submitted, errorMessage } = this.state;

    return (
      <div>
        <h2>Registration Form</h2>
        {submitted ? (
          <p className="success-message">Registration successful!</p>
        ) : (
          <form onSubmit={this.handleSubmit}>
            {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Display error message if present */}
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </label>
            <br />
            <button type="submit">Register</button>
          </form>
        )}
      </div>
    );
  }
}

export default RegistrationForm;
