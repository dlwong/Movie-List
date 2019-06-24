import App from './components/App.js';
import searchMovieDB from './lib/searchmoviedb.js';

ReactDOM.render(<App searchMovieDB={searchMovieDB}/>, document.getElementById('app'));

