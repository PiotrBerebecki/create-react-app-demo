import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      wasButtonClicked: false
    };
  }
  
  handleClick() {
    if (this.state.wasButtonClicked === false) {
      this.props.handleClick();      
      
      this.setState({
        wasButtonClicked: true
      }, () => {
        setTimeout(() => {
          this.setState({
            wasButtonClicked: false
          });
        }, 280);
      });
    }
  }
  
  render() {
    const { label, className } = this.props;
    
    return (
      <div
        className={`${className} ${className}-non-touch`}
        onClick={this.handleClick}
      >
        {label}
      </div>
    );
  }
}

export default Button;
