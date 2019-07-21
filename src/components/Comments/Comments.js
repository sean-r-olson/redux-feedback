import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';


class Comments extends Component {
    
state = {
    feelingsResponse: 1, 
    understandingResponse: 1, 
    supportedResponse: 1, 
    commentsResponse: '',  
}

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.commentsResponse})
    this.props.history.push('/Review');
    }

handleChange = (event) => {
    this.setState({
        ...this.state.commentsResponse,
        commentsResponse: event.target.value
    })
}

  render() {
    return (
      <div>
        <div className="inputDiv">
        <h2>
            Anything you'd like us to know?
        </h2>
        <textarea onChange={this.handleChange}>
        </textarea>
        <br/>
        <button onClick={this.handleSubmit}>Next</button>
        </div>
        <br/>
        <ReviewResponses/>
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Comments);