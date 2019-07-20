import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';


class App extends Component {
  render() {
    return (
      <Router>
    <main className="App">
      <Route exact path = '/' component = {Feelings} />
      <Route path = '/Understanding' component = {Understanding} />
      <Route path = '/Supported' component = {Supported} />
      <Route path = '/Comments' component = {Comments} />
      <Route path = '/Review' component = {Review} />
      <Route path = '/ThankYou' component = {ThankYou} />
    </main>
    </Router>
    );
  }
}

export default App;
