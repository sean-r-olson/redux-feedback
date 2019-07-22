import React, {Component} from 'react';
import '../App/App.css';
import {connect} from 'react-redux';


class ReviewResponses extends Component {

  render() {
    console.log(this.props.reduxStore)
    return (
    <section>
        <h1>Responses</h1>
        <hr/>
        <table className="table">
        <tbody>
        <tr>
        <th>Feelings:</th>
        <td>{this.props.reduxStore.feelingsResponseReducer}</td>
        </tr> 
        <tr> 
        <th>Understanding:</th>
        <td>{this.props.reduxStore.understandingResponseReducer}</td>
        </tr>
        <tr>
        <th>Support:</th>
        <td>{this.props.reduxStore.supportedResponseReducer}</td>
        </tr> 
        <tr>
        <th>Comments:</th> 
        <td>{this.props.reduxStore.commentsResponseReducer}</td>
        </tr> 
        {/* <button className="deactivatedBtn"></button> */}
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