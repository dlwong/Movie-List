import Search from './Search.js';
import MovieList from './MovieList.js';
import Add from './Add.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina'],
      item: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleClick() {
    this.renderList();
    event.preventDefault();
  }

  renderList() {
    var list = this.state.items.filter(item => 
      item.toLowerCase().includes(this.state.query.toLowerCase()));
    this.setState({items: list})     
  }

  handleTitle(event){
    this.setState({item: event.target.value});
  }

  handleAdd(){
    array.push(this.state.item)
    console.log(array)
    this.setState({items: array})
    event.preventDefault();
  }

  render() {
    return (
      <div className="movie-list" >
        <h2>MovieList</h2>
          <nav className="add-movie" >
            <Add value={this.state.item} handleTitle={this.handleTitle} handleAdd={this.handleAdd}/>
          </nav>
             <Search value={this.state.query} handleChange={this.handleChange} handleClick={this.handleClick} />
          <div className="movie-list-entry">
            <MovieList items={this.state.items} handleProps={this.handleProps}/>
          </div>
      </div>
    );
  }
};

var array = [];

export default App;