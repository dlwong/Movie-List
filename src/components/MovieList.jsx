import MovieListEntry from './MovieListEntry.js'

var MovieList = (props) => (
    <div>
      {props.items.map(item => 
          <ul key={item}>{item}
          <MovieListEntry handleProps = {props.handleProps}/>
        </ul>
      )}
    </div>
  );


export default MovieList; 