import React, { Component } from 'react';
import Header from '../Header/Header';
import './Register.css';

export default class Register extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='title-rya'>
          <h1>Register your account</h1>
        </div>
        <form>
          <h3>Name</h3>
          <input placeholder='Enter your full name' />
          <h3>Email adress</h3>
          <input placeholder='Enter valid email address' />
          <h3>Password</h3>
          <input placeholder='Enter your password' />
          <button>Join</button>
          <div className='signIn-box'>
            <h6>alredy have an account?</h6>
            <h6>Sign in</h6>
          </div>
        </form>
      </div>
    );
  }
}
