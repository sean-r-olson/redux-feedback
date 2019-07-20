import React, {Component} from 'react';


class Feelings extends Component {

maxResponseNumber = 5;
minResponseNumber = 1;

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Understanding');
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

state = {
    response: 1
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
      </div>
    )
  }
}

export default Feelings;