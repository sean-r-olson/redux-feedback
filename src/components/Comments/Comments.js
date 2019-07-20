import React, {Component} from 'react';

class Comments extends Component {

handleSubmit = () => {
    console.log('clicked handleSubmit');
    this.props.history.push('/Review');
    }

  render() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Next</button>
      </div>
    )
  }
}

export default Comments;