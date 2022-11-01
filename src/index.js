import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Container from 'react-bootstrap/Container';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import moviesApp from './reducers/reducers';

import MainView from './components/main-view/main-view';

import './index.scss';


const store = createStore(moviesApp, devToolsEnhancer);

//Main component (will eventually use all others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}



// For finding the root of the app
const container = document.getElementsByClassName('app-container')[0];

//from 3.8. Tell react to render app in root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);


// // Create root out of root dom element
// const root = createRoot(container)

// // Tells react to render your app in the root DOM element
// root.render(<MyFlixApplication />)