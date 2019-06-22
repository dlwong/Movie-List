
class MovieListEntry extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
                     };
    }

    handleToggle() {
        this.setState(state => ({
            toggle: !state.toggle
          }));
    }



    render() {
        return (
        <div>
            <button onClick={this.handleToggle.bind(this)}>
               {this.state.toggle ? 'WATCHED' : 'TO WATCH'}
            </button>  
        </div>
        )
    }
};

export default MovieListEntry;

{/* <button class="tablinks" onclick="openCity(event, 'London')">Watched</button>
<button class="tablinks" onclick="openCity(event, 'Paris')">To Watch</button> */}