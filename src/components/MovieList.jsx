import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
    <div>
      {props.items.map(({title, watched}) => 
          <ul key={title}>{title}
          <MovieListEntry title={title} watched={watched} handleToggle={props.handleToggle}/>
        </ul>
      )}
    </div>
  );


export default MovieList; 