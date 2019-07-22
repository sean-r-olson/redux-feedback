import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';


class Feelings extends Component {

// declare state (to be modified upon submit click)
state = {
        feelingsResponse: 1, 
        understandingResponse: 1, 
        supportedResponse: 1, 
        commentsResponse: '',  
}

// send dispatch to index containg feelings response data on submit
handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'ADD_FEELINGS', payload: this.state.feelingsResponse})
    this.props.history.push('/Understanding');
}

// modify state upon change to feelings response 
handleChange = (event) => {
    this.setState({
        ...this.state.feelingsResponse,
        feelingsResponse: event.target.value
    }) 
}

  render() {
    return (
      <div>
          <div className="inputDiv">
          <h2>
              How are you feeling today?
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

export default connect(mapStateToProps) (Feelings);