import React, { Component } from 'react';

import Input from './input'

class Card extends Component {

  constructor() {
      super()

      this.state = {
        pluralNoun: '',
        Color: ''
      }

      this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }


  render () {
    return (
      <div className="card">
        <h1>{this.state.color}</h1>
        { Input('Plural Noun', this.state.color, this.handleInputChange, 'color') }
        { Input('Color', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
      </div>
    )
  }
}

export default Card;
