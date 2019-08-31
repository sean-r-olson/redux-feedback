import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';

const styles = {
  root: {

    },

};

class Understanding extends Component {

// declare state (to be modified upon submit click)
state = {
    feelingsResponse: 1, 
    understandingResponse: 1, 
    supportedResponse: 1, 
    commentsResponse: '',  
}

// send dispatch to index containg understanding response data on submit
handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.dispatch({type: 'ADD_UNDERSTANDING', payload: this.state.understandingResponse})
    this.props.history.push('/Supported');
}

// modify state upon change to understanding response 
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
            <form className="radio">
             1
           <Radio
          checked={this.state.understandingResponse === '1'}
          onChange={this.handleChange}
          value='1'
          color= "primary"
          name="radio-button-demo"
          aria-label='1'
        />
            2
        <Radio
          checked={this.state.understandingResponse === '2'}
          onChange={this.handleChange}
          value='2'
          name="radio-button-demo"
          aria-label='2'
          color="primary"
        />
            3
        <Radio
          checked={this.state.understandingResponse === '3'}
          onChange={this.handleChange}
          value='3'
          name="radio-button-demo"
          aria-label='3'
          color="primary"
        />
            4
        <Radio
          checked={this.state.understandingResponse === '4'}
          onChange={this.handleChange}
          value="4"
          name="radio-button-demo"
          aria-label='4'
          color="primary"
        />
            5
        <Radio
          checked={this.state.understandingResponse === '5'}
          onChange={this.handleChange}
          value="5"
          name="radio-button-demo"
          aria-label='5'
          color="primary"
        />
                {/* <input type="number" min="1" max="5" onChange={this.handleChange}/> */}
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

export default withStyles(styles)(connect(mapStateToProps) (Understanding));