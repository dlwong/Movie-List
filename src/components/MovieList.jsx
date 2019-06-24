import MovieListEntry from './MovieListEntry.js';

var MovieList = (props) => {

  return (
    <div>
      {props.items.map(({title, watched, showComponent}) => 
          <ul key={title} onClick={() => props.handlePanel(title)}> {title}
           {showComponent &&  <MovieListEntry title={title} watched={watched} handleToggle={props.handleToggle}/> } 
           </ul>
      )}
    </div>)
  };


export default MovieList; 
