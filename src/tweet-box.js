import React, { Component } from 'react';

class TweetBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      text: '',
      photoAdded: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);

  };

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  togglePhoto(event) {
    this.setState({ photoAdded: !this.state.photoAdded });
  }

  remainingCharacters() {
    if (this.state.photoAdded) {
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }

  overflowAlert() {
     if (this.remainingCharacters() < 0) {
        
        var beforeOverflowText, overflowText;

     if (this.state.photoAdded) {
        beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        overflowText = this.state.text.substring(140 - 23);
     } else {
        beforeOverflowText = this.state.text.substring(140 - 10, 140);
        overflowText = this.state.text.substring(140);
     }

      return (
        <div className="alert alert-warning">
          <strong>Oops! Too Long:</strong>
          {beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="well clearfix">
      { this.overflowAlert() }
        <textarea className="form-control" onChange={this.handleChange}></textarea>
        <br/>

        <button className="btn btn-primary pull-right" disabled={this.remainingCharacters() === 140}>Tweet</button>

        <button className="js-add-photo-button btn btn-default pull-right" onClick={this.togglePhoto}>
          {this.state.photoAdded ? "✓ Photo Added" : "Add Photo" }
        </button>

        <span>{ this.remainingCharacters() }</span>

      </div>
    );
  }
}

export default TweetBox;