import React, {Component} from 'react';

class ThankYou extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/');
    }

  render() {
    return (
      <div>
          <h1>Thank You For Your Feedback</h1> 
          <button onClick={this.handleSubmit}>Leave New Feedback</button>
      </div>
    )
  }
}

export default ThankYou;