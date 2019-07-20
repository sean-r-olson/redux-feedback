import React, {Component} from 'react';

class Feelings extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Understanding');
}

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Feelings;