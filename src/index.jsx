import React from 'react';
import ReactDOM from 'react-dom';

//Import statement to indicate that we need to bundle (?) './index.scss'
import './index.scss';

//Main component (will eventually use all others)

class MyFlixApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
        <div>Good morning</div>
      </div>
    );
  }
}

// For finding the root of the app
const container = document.getElementsByClassName('app-container')[0];

//Tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);