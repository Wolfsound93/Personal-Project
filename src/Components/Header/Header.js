import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='primary-logo'>
          <i class='fas fa-road'></i>
          <span>TriPlan</span>
        </h1>
        <ul className='primary-ul'>
          <li>Home</li>
          <li>My Trips</li>
          <li>Log Out</li>
        </ul>
      </header>
    );
  }
}

export default Header;
