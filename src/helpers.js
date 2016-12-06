export const helpers = {
  
  // Generate random number between min and max
  getRandomNumber: function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  },
  
  // Shuffle array in place
  shuffleArray: function(array) {
    for (let i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  },
      
};
