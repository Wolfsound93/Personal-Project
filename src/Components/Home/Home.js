import React, { Component } from 'react';
import Header from '../Header/Header';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='use-inf'>
          <div className='greeting-title'>
            <h1>Hello UserName!</h1>
          </div>
          <div className='web-des'>
            <h5>
              welcome to triPlan the website that will easily help you keep
              truck of your milage locations and expenses over the road. are you
              ready?
            </h5>
          </div>
          <div className='user-direct'>
            <h2>Let's Roll BABE!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
