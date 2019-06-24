
var MovieListEntry = (props) => (
    <div>
        <div>Popularity: {props.popularity}</div>
         <input type="checkbox" 
          checked={props.watched ? true : false}
          onClick={() => props.handleToggle(props.title)}/> Watched
    </div>
);

export default MovieListEntry;

// <button onClick={() => props.handleToggle(props.title)}>
// {props.watched ? 'WATCHED' : 'TO WATCH'}
// </button> 

// class MovieListEntry extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             toggle: false
//                      };
//     }

//     handleToggle() {
//         this.setState(state => ({
//             toggle: !state.toggle
//           }));
//         //this.props.items.watched = !this.props.items.watched
//     }

//     render() {
//         return (
//         <div>
//             <button onClick={this.handleToggle.bind(this)}>
//                {this.state.toggle ? 'WATCHED' : 'TO WATCH'}
//             </button>  
//         </div>
//         )
//     }
// };