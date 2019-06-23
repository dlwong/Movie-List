import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
    <div>
      {props.items.map(item => 
          <ul key={item.title}>{item.title}
          <MovieListEntry />
        </ul>
      )}
    </div>
  );


export default MovieList; 