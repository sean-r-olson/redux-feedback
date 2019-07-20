import React, {Component} from 'react';
import {connect} from 'react-redux';


class ReviewResponses extends Component {

state = {
        feelingsResponse: 1, 
        understandingResponse: 1, 
        supportedResponse: 1, 
        commentsResponse: 1,  
}



  render() {
      console.log(this.state)

    return (
        <>
        <ul> Feelings: 
        {this.props.reduxStore.feelingsResponseReducer.map((response, i) => {
                       return (
                           <li key={i}>{response}</li>
                       );
                   })}
        </ul> 
        <ul> Understanding: 
        {this.props.reduxStore.understandingResponseReducer.map((response, i) => {
                       return (
                           <li key={i}>{response}</li>
                       );
                   })}
        </ul>
        <ul> Supported: 
        {this.props.reduxStore.supportedResponseReducer.map((response, i) => {
                       return (
                           <li key={i}>{response}</li>
                       );
                   })}
        </ul> 
        <ul> Comments: 
        {this.props.reduxStore.commentsResponseReducer.map((response, i) => {
                       return (
                           <li key={i}>{response}</li>
                       );
                   })}
        </ul> 
        </>
    )
}
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (ReviewResponses);