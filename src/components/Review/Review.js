import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';
import Axios from 'axios';

class Review extends Component {

// on submit, send axios req to server
//      -- send objects from reduxStore 
// send user to /ThankYou to finish feedback
handleSubmit = () => {
    console.log('clicked handleSubmit');
    Axios.post('/allResponses', this.props.reduxStore)
    .then(response => {
        console.log(response);
        this.props.history.push('/ThankYou');
    }).catch(error => {
        console.log('error posting to server', error)
    })    
}

  render() {
    console.log(this.props.reduxStore);
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

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect (mapStateToProps) (Review);