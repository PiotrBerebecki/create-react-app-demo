import React, { Component } from 'react';
import StartScreen from './StartScreen';
import GameplayScreen from './GameplayScreen';
import FinishScreen from './FinishScreen';
import './App.css';
import { imageDatabase } from './ImageDatabase';
import { helpers } from './helpers';

class App extends Component {
  constructor() {
    super();
    this.updateScreen = this.updateScreen.bind(this);
    
    this.state = {
      screen: 'start',
      images: imageDatabase,
      imagesLength: null,
      imageIndexesRemaining: null,
      imagesNext: null,
      roundsPerGame: 3,
      nextRound: 1
    }; 
  }
  
  componentDidMount() {
    const imagesLength = this.state.images.length;
    const imageIndexesRemaining = this.getFreshImageIndexesRemaining(imagesLength);
    
    this.setState({
      imagesLength: imagesLength,
      imageIndexesRemaining: imageIndexesRemaining
    }, () => this.prepareNextImages() );
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.nextRound !== nextState.nextRound;
  }
  
  getFreshImageIndexesRemaining(imagesLength) {
    let imageIndexesRemaining = [];
    for (let i = 0; i < imagesLength; i++) {
      imageIndexesRemaining.push(i);
    }
    return imageIndexesRemaining;
  }
  
  prepareNextImages() {
    let { imageIndexesRemaining } = this.state;
    
    const nextImagesIndex = this.getNextImagesIndex(imageIndexesRemaining);
    
    imageIndexesRemaining.splice(imageIndexesRemaining.indexOf(nextImagesIndex), 1);

    const imagesNext = this.state.images[nextImagesIndex][`set${nextImagesIndex.toString()}`];
    
    helpers.shuffleArray(imagesNext);
    this.preloadNextImages(imagesNext);

    if (imageIndexesRemaining.length === 0) {
      imageIndexesRemaining = this.getFreshImageIndexesRemaining(this.state.imagesLength);
    }
     
    this.setState({
      imagesNext: imagesNext,
      imageIndexesRemaining: imageIndexesRemaining
    });  
  }

  getNextImagesIndex(imageIndexesRemaining) {
    return imageIndexesRemaining[helpers.getRandomNumber(0, imageIndexesRemaining.length - 1)];
  }
  
  preloadNextImages(imagesNext) {
    imagesNext.forEach(image => {
      let imageDummyElement = new Image();
      imageDummyElement.src = image.src;
    });
  }
  
  updateScreen() {
    const { nextRound, roundsPerGame } = this.state;
    
    // Finish the game after a predefined number of rounds; or
    // show next round
    if (nextRound > roundsPerGame) {
      this.setState({
        nextRound: 1,
        screen: 'finish'
      });
    } else {
      this.setState({
        nextRound: nextRound + 1,
        screen: 'gameplay'
      }, () => this.prepareNextImages() );
    }
  }
  
  render() {
    console.log('render');
    switch(this.state.screen) {
      case 'start':
        return <StartScreen updateScreen={this.updateScreen}/>;
      case 'gameplay':
        return <GameplayScreen 
                 updateScreen={this.updateScreen} 
                 imagesNext={this.state.imagesNext}
                 nextRound={this.state.nextRound}
                 roundsPerGame={this.state.roundsPerGame}
               />;
      default:
        return <FinishScreen updateScreen={this.updateScreen}/>;
    }
  }
}

export default App;
