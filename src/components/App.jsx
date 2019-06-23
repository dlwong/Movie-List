import Search from './Search.js';
import MovieList from './MovieList.js';
import Add from './Add.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredItems : null,
      query: '',
      items: [
        {title: 'Mean Girls', watched: true},
        {title: 'Hackers', watched: true},
        {title: 'The Grey', watched: true},
        {title: 'Sunshine', watched: true},
        {title: 'Ex Machina', watched: true},
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleWatch = this.handleWatch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    var newMovies = [...this.state.items]

    newMovies = newMovies.map(movie => {
        if (movie.title === e ){
          movie.watched = !movie.watched
        }
          return movie;
    });
    console.log(e)
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleClick() {
    var list = this.state.items.filter(item => 
          item.title.toLowerCase().includes(this.state.query.toLowerCase()));
    this.setState({filteredItems: list}) 
    event.preventDefault();
  }

  handleAdd(){
    array.push({title:this.state.query, watched: true})
    this.setState({items: array})
    event.preventDefault();
  }

  handleWatch(){
    var list = this.state.items.filter(item => 
      item.watched === true);
    this.setState({filteredItems: list}) 
    event.preventDefault();
  }

  handleNotWatch(){
    var list = this.state.items.filter(item => 
      item.watched === false);
    this.setState({filteredItems: list}) 
    event.preventDefault();
  }

  render() {
    let movies; 
    movies = this.state.filteredItems ? this.state.filteredItems : this.state.items
    
    return (
      <div className="movie-list" >
        <h2>MovieList</h2>
          <nav className="add-movie" >
            <Add value={this.state.item} handleTitle={this.handleChange} handleAdd={this.handleAdd}/>
          </nav>
             <Search value={this.state.query} handleChange={this.handleChange} handleClick={this.handleClick} />
              <input type="submit" onClick = {()=> this.handleWatch()} value='Watched' />
              <input type="submit" onClick = {()=> this.handleNotWatch()} value='Not Watch' />
          <div className="movie-list-entry">
            <MovieList items={movies} handleToggle={this.handleToggle}/>
          </div>
      </div>
    );
  }
};

let array = [];

export default App;