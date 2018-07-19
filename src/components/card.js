import React, { Component } from 'react';

import Input from './input'

class Card extends Component {
  render () {
    return (
      <div className="card">
        { Input('Noun') }
        { Input('Color') }
        { Input('Adjective') }
        { Input('Place') }
      </div>
    )
  }
}

export default Card;
