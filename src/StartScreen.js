import React, { Component } from 'react';

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
        <div 
          className="start-button start-button-non-touch"
          onClick={this.updateScreen}
        >
          Start the game
        </div>
      </div>
    );
  }
}

export default StartScreen;
