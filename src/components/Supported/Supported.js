import React, {Component} from 'react';

class Supported extends Component {

maxResponseNumber = 5;
minResponseNumber = 1;
    
state = {
    response: 1
}

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Comments');
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
            How supported do you feel?
        </div>
        <form>
            <input type = "number" onChange={this.handleChange}/>
        </form>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Supported;