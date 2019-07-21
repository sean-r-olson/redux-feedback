import React, {Component} from 'react';
import {connect} from 'react-redux';

class ThankYou extends Component {

state = null;
    
handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'NEW_FEEDBACK', payload: this.state})
    this.props.history.push('/');
    }

  render() {
    return (
      <div className="inputDiv">
          <h1>ThanksFor Your Feedback!</h1> 
          <button onClick={this.handleSubmit}>Leave New Feedback</button>
      </div>
    )
  }
}

export default connect() (ThankYou);