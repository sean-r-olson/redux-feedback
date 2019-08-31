import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import green from '@material-ui/core/colors/green';


const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
    checked: {
    },

};

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
        feelingsResponse: event.target.value
    }) 
}

  render() {
    const { classes } = this.props;
    console.log(this.state)
    return (
      <div>
          <div className="inputDiv">
          <h2>
              How are you feeling today?
          </h2>
           <form className="radio">
             1
           <Radio
          checked={this.state.feelingsResponse === '1'}
          onChange={this.handleChange}
          value='1'
          color= "primary"
          name="radio-button-demo"
          aria-label='1'
        />
            2
        <Radio
          checked={this.state.feelingsResponse === '2'}
          onChange={this.handleChange}
          value='2'
          name="radio-button-demo"
          aria-label='2'
          color="primary"
        />
            3
        <Radio
          checked={this.state.feelingsResponse === '3'}
          onChange={this.handleChange}
          value='3'
          name="radio-button-demo"
          aria-label='3'
          color="primary"
        />
            4
        <Radio
          checked={this.state.feelingsResponse === '4'}
          onChange={this.handleChange}
          value="4"
          name="radio-button-demo"
          aria-label='4'
          color="primary"
        />
            5
        <Radio
          checked={this.state.feelingsResponse === '5'}
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

export default withStyles(styles)(connect(mapStateToProps) (Feelings));