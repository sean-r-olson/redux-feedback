import React, {Component} from 'react';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';

class Review extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/ThankYou');
    }

  render() {
    return (
      <div>
        <div className="inputDiv">
        <h1>Submit Your Feedback</h1>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <br/>
        <ReviewResponses />
        
      </div>
    )
  }
}

export default Review;