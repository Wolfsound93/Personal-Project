import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className='primary-logo'>
          <i class='fas fa-road'></i>TriPlan{' '}
        </h1>
        <ul className='primary-ul'>
          <Link to='/home'>
            <li>Home</li>
          </Link>
          <Link to='/MyTrips'>
            <li>My Trips</li>
          </Link>
          <Link>
            <li>Log Out</li>
          </Link>
        </ul>
      </header>
    );
  }
}

export default Header;
