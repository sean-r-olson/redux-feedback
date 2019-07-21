import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';


class Supported extends Component {
    
state = {
    feelingsResponse: 1, 
    understandingResponse: 1, 
    supportedResponse: 1, 
    commentsResponse: '',  
}

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'ADD_SUPPORTED', payload: this.state.supportedResponse})
    this.props.history.push('/Comments');
}

handleChange = (event) => {
    this.setState({
        ...this.state.supportedResponse,
        supportedResponse: event.target.value
    }) 
}

  render() {
    return (
      <div>
        <div className="inputDiv">
            <h2>
            How supported do you feel?
            </h2>
        <form>
            <input type="number" min="1" max="5"  onChange={this.handleChange}/>
        </form>
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

export default connect(mapStateToProps) (Supported);