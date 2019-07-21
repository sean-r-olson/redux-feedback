import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';


class Understanding extends Component {

state = {
    feelingsResponse: 1, 
    understandingResponse: 1, 
    supportedResponse: 1, 
    commentsResponse: '',  
}

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understandingResponse})
    this.props.history.push('/Supported');
}

handleChange = (event) => {
    this.setState({
        ...this.state.understandingResponse,
        understandingResponse: event.target.value
    }) 
}

  render() {
    return (
      <div>
        <div className="inputDiv">
            <h2>
            How well are you understanding the material?
            </h2>
        <form>
            <input type="number" min="1" max="5" onChange={this.handleChange}/>
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

export default connect(mapStateToProps) (Understanding);