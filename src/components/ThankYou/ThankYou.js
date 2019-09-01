import React, {Component} from 'react';
import {connect} from 'react-redux';

class ThankYou extends Component {

// set state to null for new feedback
state = null;

// dispatch null to index to reset responses array
// send user to feelings (home) screen
handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'NEW_FEEDBACK', payload: this.state})
    this.props.history.push('/');
    }

  render() {
    return (
      <div className="inputDiv">
          <h1>Thanks For Your Feedback!</h1> 
          <button onClick={this.handleSubmit}>Leave New Feedback</button>
      </div>
    )
  }
}

export default connect() (ThankYou);