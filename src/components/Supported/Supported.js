import React, {Component} from 'react';

class Supported extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Comments');
}

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Supported;