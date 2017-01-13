# Social Skills Hero - React

Live version: https://piotrberebecki.github.io/social-skills-hero-react/

<img src="./src/graphics/social-skills-hero-screencast.gif" width="275px" height="auto">

### The principles behind the app
---

* Children, teenagers and adolescents with autism and asperger syndrome often have difficulty recognising emotions in social situations. They often miss the body language or facial cues that other people rely on to gauge the moods of others, or even of themselves. As a result, inappropriate responses to situations may occur, for example, laughing or giggling when someone is hurt or upset.
* Social Skills Hero is a non-competitive app which allows the user to train in identifying and reacting to different social situations.
* Currently the app covers skills such as: sharing, companionship, empathy, selflessness, kindness, turn-taking, participating, engagement, ability to compromise, teamwork, respecting personal space. More skills will be added in future.
* The answers are not graded. However to make the app more engaging, a future development may include improving gamification by informing the user how many rounds have been completed and perhaps what skills have been trained.

### Development technologies and techniques
---

* Create React App - Developing react apps quickly with no build configuration.
* Image preloading - Images that will be displayed on the next screen are preloaded to ensure a smoother user experience.
* Material design - The principles of material design have been followed in order to improve accessibility and usability.
* ES6 - Effort has been made to use the latest features of the JavaScript language. This includes for example: [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let) and [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const); [arrow functions](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions); [destructuring assignment](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment).
* Mobile first design - Making sure that the app works on different mobile devices has been prioritised.
* Web app manifest - The app can be added to the user's home screen without the need to go through an app store. The `manifest.json` file also specifies the appearance of the splash screen which is shown while the app is loading.

### Running the app in your local environment
---

Clone the repository and install dependencies
```
$ git clone https://github.com/PiotrBerebecki/social-skills-hero-react.git
$ cd social-skills-hero-react
$ npm install
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.
