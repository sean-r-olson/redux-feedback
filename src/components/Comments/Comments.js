import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App/App.css';
import ReviewResponses from '../ReviewResponses/ReviewResponses';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class Comments extends Component {
  
  // declare state (to be modified upon submit click)
  state = {
      feelingsResponse: 1, 
      understandingResponse: 1, 
      supportedResponse: 1, 
      commentsResponse: '',  
  }

  // send dispatch to index containg comments response data on submit
  handleSubmit = () => {
      console.log('clicked handleSubmit');
      this.props.dispatch({type: 'ADD_COMMENTS', payload: this.state.commentsResponse})
      this.props.history.push('/Review');
      }

  // modify state upon change to comments response 
  handleChange = (event) => {
      this.setState({
          commentsResponse: event.target.value
      })
  }

  render() {
    const { classes } = this.props;
  // if comments are empty, return disabled button
    if (this.state.commentsResponse === '') {
    return (
      <div>
        <div className="inputDiv">
        <h2>
            Tell us how you're feeling about things
        </h2>
        <TextField
          id="standard-multiline-flexible"
          label="Comments"
          multiline
          rowsMax="4"
          value={this.state.commentsResponse}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
        />

        <br/>
        <button className="disabledBtn">Add Comment to Submit</button>
        </div>
        <br/>
        <ReviewResponses/>
      </div>
  // if comments are filled in, return activated button to submit feedback
    )} else if (this.state.comments !== '') {
      return (
        <div>
        <div className="inputDiv">
        <h2>
            Tell us how you're feeling about things
        </h2>
        <TextField
          id="standard-multiline-flexible"
          label="Comments"
          multiline
          rowsMax="4"
          value={this.state.commentsResponse}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
        />

        <br/>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <br/>
        <ReviewResponses/>
      </div>
      )
    }
  }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default withStyles(styles)(connect(mapStateToProps) (Comments));