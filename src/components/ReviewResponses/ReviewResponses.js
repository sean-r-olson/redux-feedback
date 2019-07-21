import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';


class ReviewResponses extends Component {

  render() {

    return (
    <section>
        <h1>Responses</h1>
        <hr/>
        <table className="table">
        <tbody>
        <tr>
        <th>Feelings:</th>
        {this.props.reduxStore.feelingsResponseReducer.map((response, i) => {
                       return (
                           <td key={i}>{response}</td>
                       );
                   })}
        </tr> 
        <tr> 
        <th>Understanding:</th>
        {this.props.reduxStore.understandingResponseReducer.map((response, i) => {
                       return (
                           <td key={i}>{response}</td>
                       );
                   })}
        </tr>
        <tr>
        <th>Support:</th>
        {this.props.reduxStore.supportedResponseReducer.map((response, i) => {
                       return (
                           <td key={i}>{response}</td>
                       );
                   })}
        </tr> 
        <tr>
        <th>Comments:</th> 
        {this.props.reduxStore.commentsResponseReducer.map((response, i) => {
                       return (
                           <td key={i}>{response}</td>
                       );
                   })}
        </tr> 
        </tbody>
        </table>
    </section>
    )
}
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps) (ReviewResponses);