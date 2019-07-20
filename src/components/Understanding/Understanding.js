import React, {Component} from 'react';

class Understanding extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Supported');
    }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Understanding;