import React, {Component} from 'react';
import {connect} from 'react-redux';


class Feelings extends Component {

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
    this.props.dispatch({type: 'ADD_FEELINGS', payload: this.state.feelingsResponse})
    this.props.history.push('/Understanding');
}

handleChange = (event) => {
    if (event.target.value < this.maxResponseNumber && event.target.value > this.minResponseNumber ) {
    this.setState({
        ...this.state.feelingsResponse,
        feelingsResponse: event.target.value
    }) 
    } else if (event.target.value > this.maxResponseNumber || event.target.value < this.minResponseNumber ) {
        alert('Your response must be between 1 and 5!')
    }
}

  render() {
      console.log(this.state)
    return (
      <div>
          <div>
              How are you feeling today?
          </div>
           <form>
                <input type = "number" onChange={this.handleChange}/>
            </form>
        <button onClick={this.handleSubmit}>Next</button>
        <ul> Feelings: 
        {this.props.reduxStore.responseReducer.map((response, i) => {
                       return (
                           <li key={i}>{response.feelingsResponse}</li>
                       );
                   })}
                   </ul> 
      </div>
    )
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (Feelings);