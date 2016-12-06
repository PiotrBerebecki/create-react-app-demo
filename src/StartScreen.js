import React, { Component } from 'react';
import Button from './Button';

class StartScreen extends Component {
  constructor() {
    super();
    this.updateScreen = this.updateScreen.bind(this);
    this.state = {
      opacityScreenContainer: 1,
    };
  }
  
  updateScreen() {
    this.setState({
      opacityScreenContainer: 0
    });
    
    setTimeout(() => {
      this.props.updateScreen('gameplay');
    }, 300);
  }
  
  render() {
    const { opacityScreenContainer } = this.state;
    
    return (
      <div id="start-screen-container" style={{opacity: opacityScreenContainer}}>
        <p>Social Skills Hero</p>
        <Button 
          label="Start the game"
          className="start-button"
          handleClick={this.updateScreen}
        />
      </div>
    );
  }
}

export default StartScreen;
