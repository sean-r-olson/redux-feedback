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
    if (this.state.commentsResponse === '') {
    return (
      <div>
        <div className="inputDiv">
        <h2>
            Tell us how you're feeling about things
        </h2>
        <textarea onChange={this.handleChange}>
        </textarea>
        <br/>
        <button className="disabledBtn">Add Comment to Submit</button>
        </div>
        <br/>
        <ReviewResponses/>
      </div>
    )} else if (this.state.comments !== '') {
      return (
        <div>
        <div className="inputDiv">
        <h2>
            Tell us how you're feeling about things
        </h2>
        <textarea onChange={this.handleChange}>
        </textarea>
        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <br/>
        <ReviewResponses/>
      </div>
      )
    }
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Comments);