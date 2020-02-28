import React, { Component } from 'react';
import './Login.css';
import Header from '../Header/Header';

class Login extends Component {
  render() {
    return (
      <section>
        {/* <Header /> */}
        <div className='primary-login'>
          <h1>Member Login</h1>
          <i class='fas fa-user'></i>
          <section className='info-box'>
            <input placeholder='Enter your email adress' />
            <input placeholder='Enter Password' />
            <button>Log in</button>
            <div className='new-user'>
              <h6>New User?</h6>
              <h6 className='sml-act'>create an account</h6>
            </div>
          </section>
        </div>
      </section>
    );
  }
}

export default Login;
