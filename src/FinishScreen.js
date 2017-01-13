import React, { Component } from 'react';
import Button from './Button';

class FinishScreen extends Component {
  constructor() {
    super();
    this.updateScreen = this.updateScreen.bind(this);
    this.state = {
      opacityScreenContainer: 0,
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacityScreenContainer: 1
      });
    }, 300);
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
      <div id="finish-screen-container" style={{opacity: opacityScreenContainer}}>
      
        <p className="finishMessage">
          Thank you for playing <br/>the Social Skills Hero
        </p>
        
        <p className="graphic">
          F
        </p>
        
        <Button 
          label="Play again"
          className="finish-button"
          handleClick={this.updateScreen}
        />
        
        <a
          id="info-link" 
          href="https://github.com/PiotrBerebecki/social-skills-hero-react" target="_blank"
        >
          <i className="fa fa-external-link"></i>
          <span>About this app</span>
        </a>
        
      </div>
    );
  }
}

export default FinishScreen;
