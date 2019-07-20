import React, {Component} from 'react';

class Review extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/ThankYou');
    }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Review;