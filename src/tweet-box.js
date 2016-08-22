import React, { Component } from 'react';

class TweetBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);

  };

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleChange}></textarea>
        <br/>
        <button className="btn btn-primary pull-right" disabled={this.state.text.length === 0}>Tweet</button>
      </div>
    );
  }
}

export default TweetBox;