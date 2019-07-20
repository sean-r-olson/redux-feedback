import React, {Component} from 'react';

class Comments extends Component {

maxResponseNumber = 5;
minResponseNumber = 1;
    
state = {
    response: 1
}

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Review');
    }

handleChange = (event) => {
    if (event.target.value < this.maxResponseNumber && event.target.value > this.minResponseNumber ) {
    this.setState({
        ...this.state.response,
        response: event.target.value
    }) 
    } else if (event.target.value > this.maxResponseNumber || event.target.value < this.minResponseNumber ) {
        alert('Your response must be between 1 and 5!')
    }
}

  render() {
    return (
      <div>
        <div>
            Anything you'd like us to know specifically?
        </div>
        <form>
            <input type = "text" onChange={this.handleChange}/>
        </form>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Comments;