import React, { Component } from 'react';
import './App.css';

import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="main">
        <Body title="Ring Signal"/>

          <Footer />
      </div>
    );
  }
}

export default App;
