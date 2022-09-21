import React from 'react';
import ReactDOM from 'react-dom';
import { MainView } from './components/main-view/main-view';

//Import statement to indicate that we need to bundle (?) './index.scss'
import './index.scss';

//Main component (will eventually use all others)
// class MyFlixApplication extends React.Component {
//   render() {
//     return (
//       <MainView />
//     );
//   }
// }


class MyFlixApplication extends React.Component {
  render() {
    const movies = this.state.movies;

    if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

    return (
      <div className="main-view">
        {movies.map(movie => <MovieCard key={movie._id} movieData={movie} />)}
      </div>
    )
  }
}



// For finding the root of the app
const container = document.getElementsByClassName('app-container')[0];

//Tells react to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);