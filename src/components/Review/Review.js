import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';
import Axios from 'axios';

class Review extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.setState({
        feelingsResponse: this.props.reduxStore.feelingsResponseReducer,
        understandingResponse: this.props.reduxStore.understandingResponseReducer,
        supportedResponse: this.props.reduxStore.supportedResponseReducer,
        commentsResponse: this.props.reduxStore.commentsResponseReducer, 
    })
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