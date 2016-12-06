import React, { Component } from 'react';
import Button from './Button';

class GameplayScreen extends Component {
  constructor() {
    super();
    this.updateScreen = this.updateScreen.bind(this);
    this.state = {
      opacityScreenContainer: 0,
      opacityImage: 1
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
    const { nextRound, roundsPerGame, updateScreen } = this.props;
    
    if (nextRound <= roundsPerGame) {
      this.setState({
        opacityImage: 0
      });
      
      setTimeout(() => {
        updateScreen('gameplay');
      }, 300);
      
      setTimeout(() => {
        this.setState({
          opacityImage: 1
        });
      }, 310);
      
    } else {
      this.setState({
        opacityScreenContainer: 0
      });
      
      setTimeout(() => {
        updateScreen('gameplay');
      }, 300);
    }
  }
  
  render() {
    const { imagesNext } = this.props;
    const imageMain = imagesNext[0];
    const imagesGrid = imagesNext.slice(1);
    
    const renderGridImages = imagesGrid.map((image, index) => {
      return (
        <figure className="grid-image-container" key={index}>
          <input type="checkbox" id={`checkbox${index.toString()}`}/>
          <img className="grid-image" src={image.src} alt={image.src}/>
        </figure>
      );
    });
    
    const { opacityScreenContainer, opacityImage } = this.state;
    
    return (

      <div id="gameplay-screen-container" style={{opacity: opacityScreenContainer}}>
        <div id="gameplay-screen">
        
          <header>
            <p>Try finding all images which show a situation similar to this one</p>
            <div id="main-image-container" style={{opacity: opacityImage}}>
              <img id="main-image" src={imageMain.src} alt={imageMain.src}/>
            </div>
          </header>
          <div id="header-drop-shadow"></div>
          
          <section id="grid-images-container" style={{opacity: opacityImage}}>
          
            { renderGridImages }
            
          </section>
          
          <footer>
            <div id="next-button-container">              
              <Button 
                label="Next"
                className="next-button"
                handleClick={this.updateScreen}
              />
            </div>
          </footer>
          
        </div>
      </div>
      
    );
  }
}

export default GameplayScreen;
