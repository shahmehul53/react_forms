import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header';
import Section from './components/Section';
import {DataProvider} from './Context'

class componentName extends Component {
  render() {
    return (
      <DataProvider>
      <div className="app">
        <Router>
          <Header />
          <Section />
        </Router>
      </div>
      </DataProvider>
    );
  }
}

export default componentName;
