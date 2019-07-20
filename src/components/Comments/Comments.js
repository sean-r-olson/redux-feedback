import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReviewResponses from '../ReviewResponses/ReviewResponses';


class Comments extends Component {

maxResponseNumber = 5;
minResponseNumber = 1;
    
state = {
    feelingsResponse: 1, 
    understandingResponse: 1, 
    supportedResponse: 1, 
    commentsResponse: 1,  
}

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.commentsResponse})
    this.props.history.push('/Review');
    }

handleChange = (event) => {
    if (event.target.value < this.maxResponseNumber && event.target.value > this.minResponseNumber ) {
    this.setState({
        ...this.state.commentsResponse,
        commentsResponse: event.target.value
    }) 
    } else if (event.target.value > this.maxResponseNumber || event.target.value < this.minResponseNumber ) {
        alert('Your response must be between 1 and 5!')
    }
}

  render() {
    return (
      <div>
        <div>
            Anything you'd like us to know specifically?
        </div>
        <form>
            <input type = "text" onChange={this.handleChange}/>
        </form>
        <button onClick={this.handleSubmit}>Next</button>
        <ReviewResponses/>
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Comments);