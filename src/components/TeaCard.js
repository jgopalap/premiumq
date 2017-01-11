require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import {Thumbnail, Button} from 'react-bootstrap';

class TeaCard extends React.Component {

  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
  }

  render() {
    const {description, title} = this.props;
    return (
        <Thumbnail id="tea-card" src="images/tea.jpg" alt="242x200">
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <Button onClick={this.handleClick} bsClass="btn btn-primary center-block">Buy</Button>
          </p>
        </Thumbnail>
    );
  }
}

TeaCard.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string
}


export default TeaCard;